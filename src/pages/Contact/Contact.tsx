import { useState } from 'react';
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import Reveal from '../../components/Reveal';
import { profile } from '../../static/profile';
import './styles.css';

const contactEmail = profile.email;
const emailjsServiceId =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || 'portfolio_contact';
const emailjsTemplateId =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_3p5l5wk';
const emailjsPublicKey =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_PUBLIC_KEY;
const emptyForm = { name: '', email: '', title: '', message: '' };

export default function Contact() {
  const [formState, setFormState] = useState(emptyForm);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(
      formState.title || 'Portfolio message from ' + formState.name,
    );
    const body = encodeURIComponent(
      'Name: ' +
        formState.name +
        '\nEmail: ' +
        formState.email +
        '\n\n' +
        formState.message,
    );
    return 'mailto:' + contactEmail + '?subject=' + subject + '&body=' + body;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;
    const templateParams = {
      ...formState,
      to_name: 'Samir Idris',
      to_email: contactEmail,
      from_name: formState.name,
      from_email: formState.email,
      user_name: formState.name,
      user_email: formState.email,
      reply_to: formState.email,
      subject: formState.title || 'Portfolio message from ' + formState.name,
    };
    setIsSending(true);
    setFeedback('');

    if (!emailjsPublicKey) {
      const message =
        'Your email app will open with your message ready to send.';
      setFeedback(message);
      window.location.href = buildMailtoLink();
      setIsSending(false);
      return;
    }

    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        templateParams,
        emailjsPublicKey,
      );
      const message = 'Thanks! Samir received your message.';
      setFeedback(message);
      setFormState(emptyForm);
    } catch {
      const message =
        'Message could not be sent here. Opening your email app instead.';
      setFeedback(message);
      window.location.href = buildMailtoLink();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <p className="section-label">
            <span>06</span> / Get in touch
          </p>
          <div className="contact-layout">
            <div className="contact-copy">
              <h2>
                Let's build
                <br />
                something
                <br />
                <span>difficult.</span>
              </h2>
              <p>
                Engineering challenges, research ideas or a worthwhile
                collaboration. I'd like to hear about it.
              </p>
              <a
                className="text-link contact-email"
                href={'mailto:' + contactEmail}
              >
                {contactEmail}
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <p className="contact-location">
                <FiMapPin aria-hidden="true" />
                Abuja
              </p>
              <div className="contact-socials" aria-label="Social profiles">
                <a
                  className="text-link"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub aria-hidden="true" />
                  GitHub
                  <FiArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="text-link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin aria-hidden="true" />
                  LinkedIn
                  <FiArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="icon-button"
                  href={profile.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X / Twitter"
                  title="X / Twitter"
                >
                  <FaXTwitter aria-hidden="true" />
                </a>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-busy={isSending}
            >
              <div className="form-heading">
                <FiMail aria-hidden="true" />
                <h3>Start a conversation</h3>
                <span>DIRECT MESSAGE</span>
              </div>
              <fieldset disabled={isSending}>
                <legend className="sr-only">Your message to Samir</legend>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">
                      Name <span>*</span>
                    </label>
                    <input
                      required
                      autoComplete="name"
                      maxLength={120}
                      name="name"
                      id="contact-name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">
                      Email <span>*</span>
                    </label>
                    <input
                      required
                      autoComplete="email"
                      maxLength={254}
                      type="email"
                      name="email"
                      id="contact-email"
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    name="title"
                    id="contact-subject"
                    maxLength={200}
                    placeholder="What do you have in mind?"
                    value={formState.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-message">
                    Message <span>*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    id="contact-message"
                    maxLength={5000}
                    rows={5}
                    placeholder="Tell me a little about it..."
                    value={formState.message}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-submit">
                  <button
                    className="button button-primary"
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Send message'}
                    <FiSend aria-hidden="true" />
                  </button>
                  <span>
                    STRAIGHT TO MY INBOX <FiArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </fieldset>
              <p className="form-feedback" role="status">
                {feedback}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

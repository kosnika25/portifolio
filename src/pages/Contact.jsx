import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: 'karenvaliaodeabreudrive@gmail.com',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailError, setEmailError] = useState('');

  const YOUR_EMAIL = 'karenvaliaodeabreudrive@gmail.com';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Limpa o erro quando o usuário começa a digitar
    if (e.target.id === 'email') {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verifica se o email é o seu
    if (formData.email !== YOUR_EMAIL) {
      setEmailError('Só é possível enviar mensagens a partir do email karenvaliaodeabreudrive@gmail.com');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_rygdo5q', // Service ID
        'template_mdjagce', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `Contato do Portfólio: ${formData.subject}`,
          message: formData.message,
          to_email: YOUR_EMAIL
        },
        'hXVFCR3POeROZ6v5U' // Public Key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Falha no envio:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info animate-fade">
            <h1>Entre em Contato</h1>
            <p className="section-subtitle">Estou disponível para oportunidades e colaborações. <br></br>Envie-me uma mensagem!</p>
            
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Localização</h3>
                <p>Jales, SP - Brasil</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h3>Telefone</h3>
                <p>(17) 99639-8052</p>
              </div>
            </div>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>karenvaliaodeabreudrive@gmail.com</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/kosnika25" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form animate-fade delay-1">
            <h2>Envie uma mensagem</h2>
            
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Digite seu nome" 
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="karenvaliaodeabreudrive@gmail.com" 
                required
                value={formData.email}
                onChange={handleChange}
              />
              {emailError && <p className="form-error">{emailError}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                placeholder="Sobre o que deseja falar?" 
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                name="message"
                rows="5" 
                placeholder="Escreva sua mensagem aqui..." 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="form-group">
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
            
            {submitStatus === 'success' && (
              <p className="form-success">Mensagem enviada com sucesso!</p>
            )}
            {submitStatus === 'error' && !emailError && (
              <p className="form-error">Erro ao enviar mensagem. Tente novamente.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
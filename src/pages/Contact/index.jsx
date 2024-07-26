import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { ThemeContext } from '../../utils/context';


const ContactContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => (theme === 'light' ? colors.backgroundLight : colors.backgroundDark)};
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const Title = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : 'white')};
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => (theme === 'light' ? colors.primary : 'white')};
`;


const Input = styled.input`
  padding: 10px;
  margin-bottom: 8px;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: ${({ theme }) => (theme === 'light' ? colors.backgroundLight : colors.backgroundDark)};
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 8px;
  width: 100%;
  max-width: 400px;
  height: 100px;
  border: 1px solid ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: ${({ theme }) => (theme === 'light' ? colors.backgroundLight : colors.backgroundDark)};
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  cursor: pointer;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => (theme === 'light' ? colors.primary : 'white')};
  border-bottom: 1px solid ${({ theme }) => (theme === 'light' ? colors.primary : 'white')};
`;

const ContactInfoSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => (theme === 'light' ? '#F1F1F1' : colors.dark)};
  width: 70%;
  margin: 0 auto;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
`;

const Content = styled.a`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  text-align: center;
  text-decoration: none;
  &:hover 
  {
    text-decoration: underline;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin-top: 20px;
`;


function Contact() 
{
    const handleSubmit = (e) => {
        e.preventDefault();
        // Future POST request to your API
        console.log('Form data:');
        };


  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ContactContainer theme={theme}>
          <Title theme={theme}>Contactez-nous !</Title>

          <ContactInfoSection theme={theme} onSubmit={handleSubmit}>
            <Input theme={theme} type="text" placeholder="Nom" required />
            <Input theme={theme} type="tel" placeholder="Téléphone" required />
            <Input theme={theme} type="email" placeholder="Email" required />
            <TextArea theme={theme} placeholder="Votre message" required />
            <SubmitButton type="submit">Envoyer</SubmitButton>
          </ContactInfoSection>


          <ContactInfoSection theme={theme}>
            <SectionTitle theme={theme}>Téléphone & Email : </SectionTitle>
            <Content theme={theme} href="tel:+33123456789" > 📞 01 23 45 67 89</Content>
            <Content theme={theme}href="mailto:contact@agencefictive.com" > 📧 contact@agencefictive.com</Content>
          </ContactInfoSection>

          <ContactInfoSection theme={theme}>

            <SectionTitle theme={theme}> Adresse : </SectionTitle>

            <Content theme={theme} 
                target="_blank"
                href="https://www.google.com/maps/search/?api=1&query=55+Rue+Fictive,75001+Paris,France" 
            >
              55 Rue Fictive<br />
              75001 Paris<br />
              France
            </Content>

            <MapContainer>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990769520288!2d2.2922924156749153!3d48.85884407928709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf1f5c8b1%3A0x4220f1fd8b9a04b!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1632821234567!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </MapContainer>
            
          </ContactInfoSection>

        </ContactContainer>
      )}
    </ThemeContext.Consumer>
  );
}

export default Contact;

import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Question_form = styled.div`
  background-color: #f4f4f9;
  height: 100%;
  padding-bottom: 30px;
`;

const Section = styled.div`
  margin: auto;
  width: 50%;
`;

const Question_title_section = styled.div``;

const Question_form_top = styled.div`
  background-color: white;
  border-top: 8px solid rgb(103, 58, 183);
  border-radius: 8px;
  padding: 30px 25px;
  text-transform: capitalize;
`;

const Question_form_top_name = styled.input`
  box-sizing: border-box;
  font-family: 'Google sans', Roboto, Arial, sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  line-height: 135%;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #f4f4f9;
  color: black;
  height: 35px;
`;

const Question_form_top_desc = styled.input`
  box-sizing: border-box;
  margin-top: 10px;
  font-family: 'Google sans', Roboto, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 40px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #f4f4f9;
  color: black;
  height: 20px;
`;

const Body = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: 'Which is the capital ?',
      questionType: 'radio',
      options: [
        { optionText: 'Beng1' },
        { optionText: 'Beng2' },
        { optionText: 'Beng3' },
        { optionText: 'Beng4' },
      ],
      open: true,
      required: false,
    },
  ]);

  const questionsUI = () => {
    return questions.map((ques, i) => {
      <div>
      </div>;
    });
  };

  return (
    <Container>
      <Question_form className="question_form">
        <br />
        <Section className="section">
          <Question_title_section className="question_title_section">
            <Question_form_top className="question_form_top">
              <Question_form_top_name
                type="text"
                className="question_form_top_name"
                style={{ color: 'black' }}
                placeholder="Untitled document"
              ></Question_form_top_name>
              <Question_form_top_desc
                type="text"
                className="question_form_top_desc"
                style={{ color: 'black' }}
                placeholder="Form description"
              ></Question_form_top_desc>
            </Question_form_top>
          </Question_title_section>
          {questionsUI()}
        </Section>
      </Question_form>
    </Container>
  );
};

export default Body;

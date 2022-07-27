import styled from 'styled-components';

const Question_form = styled.div`
  background-color: #f4f4f9;
  height: 100%;
  padding-bottom: 30px;
`;

const Section = styled.div`
  margin: auto;
  width: 50%;
`;

const Body = () => {
  return (
    <div>
      <Question_form className="question_form">
        <br></br>
        <Section className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: 'black' }}
                placeholder="Untitled document"
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                style={{ color: 'black' }}
                placeholder="Form description"
              ></input>
            </div>
          </div>
        </Section>
      </Question_form>
    </div>
  );
};

export default Body;

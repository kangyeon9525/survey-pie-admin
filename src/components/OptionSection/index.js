import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setQuestion } from '../../stores/survey/surveySlice';
const { Item } = Form;

function OptionSection() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.selectedQuestionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQuestionId.data],
  );
  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data,
  );

  useEffect(() => {
    if (!question) return;

    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
    });
  }, [form, question]);

  return (
    <OptionSectionWrapper>
      <Title>문항 옵션</Title>
      <FormWrapper>
        {question ? (
          <Form form={form} layout={'vertical'} name="option-form">
            <SubTitle>공통옵션</SubTitle>
            <Item
              label="질문"
              name="title"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Item>
            <Item
              label="설명"
              name="desc"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Item>
            <Form.Item>
              <Button
                type="primary"
                onClick={() => {
                  const values = form.getFieldValue();
                  console.log(values);
                  dispatch(
                    setQuestion({ index: selectedQuestionId, data: values }),
                  );
                }}
              >
                적용
              </Button>
            </Form.Item>
          </Form>
        ) : (
          '질문을 선택해주세요'
        )}
      </FormWrapper>
    </OptionSectionWrapper>
  );
}

const OptionSectionWrapper = styled.div`
  height: 100%;
  background: #ffffff;
  border-left: 1px solid #dddddd;
`;

const Title = styled.div`
  font-weight: 500;
  background: #f0f0f0;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 1.03rem;
  font-weight: 600;
  margin: 10px 0;
`;

const FormWrapper = styled.div`
  padding: 20px;
`;

export default OptionSection;

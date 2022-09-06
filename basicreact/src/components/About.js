import {  Typography ,Divider,Image} from 'antd';
import React from 'react';
const { Title, Paragraph, Text} = Typography;


const About = () => (
  <Typography>
    <Title >Introduction</Title>
    <Paragraph>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Paragraph>
    <Paragraph>
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to
      <Text strong>
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development.
      </Text>
      </Paragraph>
      
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p><Divider/>
   
    
   
      
      <Image src='https://cdn4.vectorstock.com/i/1000x1000/89/28/many-school-children-in-front-of-school-building-vector-21578928.jpg' alt='school'  preview={false}/>
      
   
    
  </Typography>
);

export default About;





















































































































































































































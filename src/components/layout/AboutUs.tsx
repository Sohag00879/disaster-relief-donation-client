import { Row, Col, Typography } from 'antd';
import {BulbOutlined} from '@ant-design/icons';

const { Title, Text } = Typography;

const AboutUs = () =>{
  const dark = localStorage.getItem('isDark') === 'true';
  return (
    <div className={`${dark?'bg-neutral-950':'bg-[#008080]'} py-[40px] px-[32px]`}>
      <div style={{ margin: '0 auto', padding: '0 20px' }}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Title level={2} style={{ textAlign: 'center',color:'white', marginBottom: '40px', fontSize:'30px', lineHeight:'36px' }}>
              How we work?
            </Title>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '40px' }}>
            <div style={{ textAlign: 'center',color:'white'}}>
              <BulbOutlined style={{ fontSize: '50px', color: 'white' }}/>
              <Title level={4} style={{ color: 'white', marginTop: '20px' }}>
              Identifying Needs
              </Title>
              <Text style={{ color: '#CCCCCC' }}>
              Our team closely monitors disaster-affected regions to identify the most urgent needs. We collaborate with local authorities, NGOs, and communities to assess the specific clothing requirements of those affected.
              </Text>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '40px' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
            <BulbOutlined style={{ fontSize: '50px', color: 'white' }}/>
              <Title level={4} style={{ color: 'white', marginTop: '20px' }}>
              Collection and Sorting
              </Title>
              <Text style={{ color: '#CCCCCC' }}>
              Once the needs are identified, we initiate clothing collection drives. Donors can contribute new or gently used clothing items through our platform. Upon collection, our team sorts and organizes the clothing to ensure efficient distribution.
              </Text>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '40px' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
            <BulbOutlined style={{ fontSize: '50px', color: 'white' }}/>
              <Title level={4} style={{ color: 'white', marginTop: '20px' }}>
              Distribution Channels
              </Title>
              <Text style={{ color: '#CCCCCC' }}>
              We work with trusted local partners and relief organizations to distribute clothing directly to those in need. By leveraging established distribution channels, we ensure that donations reach disaster-affected communities swiftly and effectively.
              </Text>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '40px' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
            <BulbOutlined style={{ fontSize: '50px', color: 'white' }}/>
              <Title level={4} style={{ color: 'white', marginTop: '20px' }}>
              Transparency and Impact
              </Title>
              <Text style={{ color: '#CCCCCC' }}>
              Transparency is at the core of our operations. We provide regular updates on donation collection, distribution progress, and the impact of contributions. Our goal is to ensure that every donation makes a meaningful difference in the lives of those affected by disasters.
              </Text>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;

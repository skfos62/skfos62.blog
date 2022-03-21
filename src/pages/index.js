import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import {
  homeImage,
  homeInfoContainer,
  careerLink,
  homeHighlight,
  scrollAnimaion,
  scrollAnimaionUp,
  show,
} from '../components/layout.module.css';

function IndexPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpend, setIsOpend] = useState(false);

  useEffect(() => {
    setIsOpend(true);
    window.addEventListener('scroll', () => {
      setIsScrolled(true);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setIsScrolled(false);
      });
    };
  }, []);

  return (
    <main>
      <Layout pageTitle="Home">
        <div className={homeInfoContainer}>
          <div
            className={`${scrollAnimaion} ${scrollAnimaionUp} ${
              isOpend ? '' : show
            } `}
          >
            <h1>
              <strong>디자이너 경력이 있는</strong> <br />
              <span className={homeHighlight}>클라이언트 개발자 정나래 </span>
              <strong>입니다.</strong>
            </h1>
            <p>
              약 4년간의 웹디자이너로써의 경험을 살려서 사용자들의 입장에서 쓰기
              <br />
              편한 웹환경을 구성하고 싶습니다. 어떻게 하면 가장 직관적으로
              편리함을 <br />
              줄수있을지 함께 고민하면 좋겠습니다.
            </p>
            <p>
              서비스를 만드는것은 한사람의 노력으로 되지 않는것을 잘
              알고있습니다. <br />서비스를 만드는 모두가 함께 건설적인 피드백을 하며 발전시켜,
              <br />
              좋은 서비스를 개발하고 싶습니다.              
            </p>
          </div>
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../images/pic.png"
            className={homeImage}
          />
        </div>
        <br />
        <div
          className={`${scrollAnimaion} ${scrollAnimaionUp} ${
            isOpend ? '' : show
          } `}
        >
          <hr />
          <h2>
            <span className={homeHighlight}>#</span> Career
          </h2>
          <div>
            <div
              style={{
                display: 'flex',
                gap: 20,
                marginBottom: 10,
                alignItems: 'center',
              }}
            >
              <Link
                to="https://www.imedisync.com/"
                className={careerLink}
                target="_blank"
              >
                imedisync
              </Link>
              <p>2021 .03 .22 ~ 현재</p>
            </div>
            <div style={{ marginLeft: 20 }}> - Frontend </div>
            <div style={{ marginLeft: 20 }}> - ios developer </div>
            <div style={{ marginLeft: 20 }}>
              - 2021년 하반기 <strong>우수사원</strong> 수상
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <div
              style={{
                display: 'flex',
                gap: 20,
                marginBottom: 10,
                alignItems: 'center',
              }}
            >
              <Link
                to="https://www.iclickart.co.kr/"
                className={careerLink}
                target="_blank"
              >
                npine
              </Link>
              <p>2015 .04 .01 ~ 2019. 06. 14</p>
            </div>
            <div style={{ marginLeft: 20 }}> - Web Designer </div>
          </div>
        </div>

        <br />
        <div
          className={`${scrollAnimaion} ${scrollAnimaionUp} ${
            isOpend ? '' : show
          } `}
        >
          <hr />
          <h2>
            <span className={homeHighlight}>#</span> Education
          </h2>
          <div>
            <div style={{ display: 'flex', gap: 20, marginBottom: 10 }}>
              <div>서울 디지털 사이버 대학 / 디자인과 졸업 </div>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', gap: 20, marginBottom: 10 }}>
              <div>영남 이공 대학 / 시각 디자인과 졸업 </div>
            </div>
          </div>
        </div>

        <br />
        <div
          className={`${scrollAnimaion} ${scrollAnimaionUp} ${
            isOpend ? '' : show
          } `}
        >
          <hr />
          <h2>
            <span className={homeHighlight}>#</span> Project & Used Skils
          </h2>

          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 10,
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  marginBottom: 10,
                  flexWrap: 'wrap',
                  gap: 20,
                }}
              >
                <Link
                  to="https://stage.portal.isyncbrain.com/auth/login"
                  className={careerLink}
                  target="_blank"
                >
                  IsyncBrain 3.0
                </Link>
                <span>
                  <strong>2021. 05. 11 ~ 현재</strong>
                </span>
              </div>

              <p>
                뇌파 기반의 경도인지장애 조기 판별 프로그램의 웹사이트 입니다.
                iSyncWave라는 자사의 뇌파 검사 기계를 <br />
                활용하여 뇌파 검사 후 얻어지는 다양한 데이터 및 결과지를 볼수
                있는 사이트입니다.
              </p>
              <p>
                병원 및 연구실을 위한 뇌파데이터를 관리하는 곳이므로, 데이터와
                결과지를 보는 기능 외에도 <br /> 고객을 관리하는 기능 및 내부
                사람들을 위한 admin사이트를 구축하였습니다.
              </p>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  marginBottom: 10,
                  flexDirection: 'column',
                  marginLeft: 20,
                }}
              >
                <div>
                  <strong>언어</strong>
                  <p> - Typescript </p>
                </div>
                <div>
                  <strong>사용 기술 내용</strong>
                  <p> - React </p>
                  <p> - Material-UI, Css-in-js, Styled components</p>
                  <p> - Redux,Redux-saga (thunk로 마이그레이션), Redux-thunk </p>
                  <p> - React-query </p>
                  <p> - i18n (다국어화 지원) </p>
                </div>              
              </div>
            </div>
          </div>
          <br />
          <div>
            <div
              style={{
                display: 'flex',
                marginBottom: 10,
                flexWrap: 'wrap',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  marginBottom: 10,
                  flexWrap: 'wrap',
                  gap: 20,
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 700 }}>IsyncBeat</div>
                <span>
                  <strong>2021. 03. 22 ~ 2021. 05. 10</strong>
                </span>
              </div>
              <p>
                심박수 측정을 바탕으로 우울 및 스트레스 지수를 측정할수 있고,
                바이오 피드백을 진행할수있는 앱입니다. <br />
                해당 프로젝트는 약 2개월간 투입되어 업무를 진행하였습니다.
              </p>
              <p>
                이 프로젝트에서는 firebase를 이용한 회원가입 및 로그인, apple
                login구현, 설정페이지를 진행하였습니다.
              </p>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  marginBottom: 10,
                  flexDirection: 'column',
                  marginLeft: 20,
                }}
              >
                <div>
                  <strong>사용 스킬</strong>
                  <p> - Swift </p>
                  <p> - Swift Ui </p>
                  <p> - Firebase </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
export default IndexPage;

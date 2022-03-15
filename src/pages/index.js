import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { homeImage, homeInfoContainer, careerLink,homeHighlight } from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home">
        <div className={homeInfoContainer}>
          <div>
            <h1><strong>디자이너 경력이 있는</strong> <br /><span className={homeHighlight}>클라이언트 개발자 정나래 </span><strong>입니다.</strong> </h1>
            <p>약 4년간의 웹디자이너로써의 경험을 살려서 사용자들의 입장에서 쓰기 <br />편한 웹환경을 구성하고 싶습니다. 어떻게 하면 가장 직관적으로 편리함을 <br />줄수있을지 함께 고민하면 좋겠습니다.</p>
            <p>좋은 ui/ux란 한사람의 노력으로 되지 않는것을 잘 알고있습니다. <br/> 서비스를 만드는 모두가 함께 피드백을 하며 발전시켜,<br /> 좋은 서비스를 개발하고 싶습니다.</p>
            
          </div>
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../images/pic.png"
            className={homeImage}
          />
        </div>
        <br/>
        <div>
          <hr />
          <h2 > <span className={homeHighlight}>#</span> Career</h2>
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
              <Link to="https://www.imedisync.com/" className={careerLink}>
                imedisync
          </Link>
              <p>2021 .03 .22 ~ 현재</p>
            </div>
            <div style={{ marginLeft: 20 }}> - Frontend </div>
          </div>
          <div style={{ marginTop: 10, }}>
            <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
              <Link to="https://www.iclickart.co.kr/" className={careerLink}>
                npine
              </Link>
              <p>2015 .04 .01 ~ 2020. 06. 14</p>
            </div>
            <div style={{ marginLeft: 20 }}> - Web Designer </div>
          </div>
        </div>

        <br />
        <div>
        <hr />
          <h2 > <span className={homeHighlight}>#</span> Education</h2>
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
              <div>서울 디지털 사이버 대학 / 디자인과 졸업 </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
              <div>영남 이공 대학 / 시각 디자인과 졸업 </div>
            </div>
          </div>
        </div>

        <br />
        <div>
        <hr />
        <h2 > <span className={homeHighlight}>#</span> Project & Used Skils</h2>
          
          <div>
            <div style={{ display: "flex", flexDirection:'column',  marginBottom: 10, flexWrap: "wrap" }}>
              <Link to="https://portal.isyncbrain.com/auth/login" className={careerLink}>
                IsyncBrain 3.0
              </Link>
              <p>뇌파 기반의 경도인지장애 조기 판별 프로그램의 웹사이트 입니다. <br/> 뇌파 검사 후 얻어지는 다양한 데이터들을 볼수있고, 회원 정보 수정 및 회원 관리 등이 가능한 사이트 입니다. </p>
            </div>
            <div>
              <div style={{ display: "flex", gap: 10, marginBottom: 10, flexDirection: "column", marginLeft: 20 }}>
                <div>   - Typescript </div>
                <div>   - React </div>
                <div>   - Redux-saga </div>
                <div>   - Redux-thunk </div>
                <div>   - React-query </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 10, flexWrap: "wrap"}}>
              <div style={{fontSize: 18}}>
                IsyncBeat
              </div>
              <div>입사직후 ios 어플리케이션 구축 업무를 담당하였으나, IsyncBrain업무 투입 후 중단 </div>
            </div>
            <div>
              <div style={{ display: "flex", gap: 10, marginBottom: 10, flexDirection: "column", marginLeft: 20 }}>
                <div>   - Swift </div>
                <div>   - Swift Ui </div>
                <div>   - Firebase </div>
              </div>
            </div>
          </div>


        </div>


      </Layout>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage
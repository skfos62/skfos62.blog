import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { homeImage, homeInfoContainer, title, careerLink } from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home">
        <div className={homeInfoContainer}>
          <div>
            <p>안녕하세요.<br /> 디자인 경력이 있는 클라이언트 개발자 정나래 입니다. 👋 <br />저는 약 4년간의 웹디자이너 경력이 있습니다. <br /> 디자이너로써 일을 하면서 html, css 유지보수를 맡아서 진행했습니다. <br />간단하게나마 코딩을 접하고나니 코딩의 매력에 푹 빠져버려서 무작정 개발자가 되고싶었습니다. </p>
            <br />
            <p>클라이언트 개발을 경험하면서 개발자도 사용자들의 경험 개선에 큰 역할을 하고있는것을 깨달았습니다.</p>
            <p>웹과 어플리케이션에 대해 고민을 하며 사용자 경험을 개선하고 싶은 개발자 입니다.</p>
          </div>

          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../images/pic.png"
            className={homeImage}
          />
        </div>
        <div>
          <h2 className={title}>Career</h2>
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
          <h2 className={title}>Education</h2>
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
          <h2 className={title}>Project & Used Skils</h2>
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 10, flexWrap: "wrap" }}>
              <Link to="https://portal.isyncbrain.com/auth/login" className={careerLink}>
                IsyncBrain 3.0
              </Link>
              <div>사이트 & 어드민 사이트 구축 및 유지보수 업무를 담당하였습니다.</div>
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
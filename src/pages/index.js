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
            <p>안녕하세요. 개발자 정나래 입니다. 👋 <br />이런이런 저런저런 텍스트 들어갈곳 입니두.<br /> 뭐라고 적어야될지 모르겠네 런저런 텍스트 들어갈곳 뭐라고 적어야될지 모르겠네  입니두.<br /> 뭐라고 적어야될지 모르겠네 런저런 텍스트 들어갈곳 입니두.</p>
            <br />
            <p>이런 저런저런 텍스트 들어갈곳 입니두. 블라블라</p>
            <p>이런 저런저런 텍스트 들어갈곳 입니두. 블라블라 어쩌구 저쩌구 </p>
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
            <p style={{ marginLeft: 20 }}> - Frontend </p>
          </div>
          <div style={{ marginTop: 10, }}>
            <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
              <Link to="https://www.iclickart.co.kr/" className={careerLink}>
                npine
              </Link>
              <p>2015 .04 .01 ~ 2020. 06. 14</p>
            </div>
            <p style={{ marginLeft: 20 }}> - Web Designer </p>
          </div>
        </div>

        <br />
        <div>
          <h2 className={title}>Education</h2>
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
              <p>서울 디지털 사이버 대학 / 디자인과 졸업 </p>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
              <p>영남 이공 대학 / 시각 디자인과 졸업 </p>
            </div>
          </div>
        </div>

        <br />
        <div>
          <h2 className={title}>Project & Used Skils</h2>
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
              <Link to="https://www.iclickart.co.kr/" className={careerLink}>
                IsyncBrain 3.0
              </Link>
              <p>사이트 & 어드민 사이트 구축 및 유지보수 업무를 담당하였습니다.</p>
            </div>
            <div>
              <div style={{ display: "flex", gap: 10, marginBottom: 10, flexDirection: "column", marginLeft: 20 }}>
                <p>   - Typescript </p>
                <p>   - React </p>
                <p>   - Redux-saga </p>
                <p>   - Redux-thunk </p>
                <p>   - React-query </p>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
              <p style={{fontSize: 18}}>
                IsyncBeat
              </p>
              <p>입사직후 ios 어플리케이션 구축 업무를 담당하였으나, IsyncBrain업무 투입 후 중단 </p>
            </div>
            <div>
              <div style={{ display: "flex", gap: 10, marginBottom: 10, flexDirection: "column", marginLeft: 20 }}>
                <p>   - Swift </p>
                <p>   - Swift Ui </p>
                <p>   - Firebase </p>
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
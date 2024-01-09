import React from "react"
import './homepage.css'
import defaultImage from '../../assets/image 1.png'

let homepage = () => {

    return (
        <>
            <div className="Homepage">
                <div className="status">
                    <div className="activity-ring">
                        <div style={{borderColor: "#04BC00"}}>
                            <span>65k</span>
                        </div>
                        <span>Total Sale : <mark>65k</mark></span>
                    </div>
                    <div className="activity-ring">
                        <div style={{borderColor: "#FF0707"}}>
                            <span>523</span>
                        </div>
                        <span>Total Member : <mark>523</mark></span>
                    </div>
                    <div className="activity-ring">
                        <div>
                            <img src={defaultImage} alt="" />
                        </div>
                        <span>Most Popular : <mark>Food name</mark></span>
                    </div>
                </div>
                <div className="content">
                    <header className="title-header">
                        <h1>Lastest 10 User register</h1>
                    </header>
                    <header className="title-header" style={{gridColumn: "2 / 2 span"}}>
                        <h1>Rankings</h1>
                    </header>
                    <div className="content-1"></div>
                    <div className="content-2"></div>
                    <div className="content-3"></div>
                </div>
            </div>
        </>
    )
}

export default homepage
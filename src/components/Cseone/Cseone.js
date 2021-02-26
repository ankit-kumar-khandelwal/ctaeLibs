import React, { Component } from 'react'
import {CseoneItems} from "./CseoneItems"
import "./Cseone.css"
import {Card} from "react-bootstrap"
export default class Firstyear extends Component {
    render() {
        return (
            <div>
            {CseoneItems.map((item,index)=>{
                
                return(
                    <div>
                        <div className="container">
                        <div className="row">
                        <div className={item.subI==='1' ? "show col-lg-6" : "show3 col-lg-6"}>
                            
                           <a href={item.subUrl} target="_blank"> <Card bg="secondary" className="mb-2">
                                <Card.Body>
                                    <Card.Title>
                                    {item.subName}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                            
                        </div>
                        <div className={item.subI==='2' ? "show col-lg-6" : "show3 col-lg-6"}>
                        <a href={item.subUrl} target="_blank">
                        <Card bg="info" className="mb-2">
                                <Card.Body>
                                    <Card.Title>
                                    {item.subName}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </div>
        
                        </div>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}

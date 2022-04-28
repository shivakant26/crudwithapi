import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    const Logout = () => {
        localStorage.removeItem("logintoken")
    }
    return (
        <div className="dashboard-page">
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <div className="left-sidebar">
                            <div className="sidebar-heading">
                            <h2>Dashboard</h2>
                            </div>
                            <div className="sidebar-item">
                                <div className="sidebar-item-inner">
                                    <Sidebar />
                                    <a href="/signin" className="logout" onClick={Logout}>Logout</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="show-pages">
                            <div className="show-page-heading">
                                <h4>Alumani WorkSpace</h4>
                            </div>
                            <Outlet />
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;
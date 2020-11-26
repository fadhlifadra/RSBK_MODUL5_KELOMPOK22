import React, { Component } from "react";
import axios from "axios";
import { Card, Space, Button, notification } from 'antd';
import "antd/dist/antd.css";


export default class holidays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            holidays: [],
            visible: false,
            name: "",
            date: "",
            observed: "",
        };
    }
    handleButton = (name, date) => {
        notification.open({
            message: 'Holiday Name : ' + name,
            description: 'Holiday Date : ' + date,
        });
    };
    handleName = (e) => {
        this.setState({
            name: e.target.value,
        });
        console.log(this.state.name);
    };
    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        });
        console.log(this.state.date);
    };
    handleObserved = (e) => {
        this.setState({
            observed: e.target.value,
        });
        console.log(this.state.observed);
    };
    componentDidMount() {
        axios({
            method: "get",
            url: "https://holidayapi.com/v1/holidays?pretty&country=ID-JW&year=2019&key=89b7a895-252c-4930-bc8d-4d7793b3cc85",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data.holidays);
                this.setState({
                    holidays: data.data.holidays,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.holidays.map((results, index) => {
                        return (
                            <div key={results.name}>
                                <Space>
                                    <Card title="Holiday" style={{ width: 300 }}>
                                        <p>Name : {results.name}</p>
                                        <p>Date : {results.date}</p>
                                        <p>Observed : {results.observed}</p>
                                        <Button type="primary" onClick={() => this.handleButton(results.name, results.date)}>{" "}Click Me</Button>
                                    </Card>
                                </Space>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
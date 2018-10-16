import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import DeleteIcon from "@material-ui/icons/Delete";
import ProfileIcon from './UI/ProfileIcon';
import InfiniteScroll from 'react-infinite-scroll-component';
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";
import "./UI/scrolling.css";

class Scroll extends React.Component {
    state = {
        items: this.props.employees.data.slice(this.props.scroll.count, this.props.scroll.count + 2)
    };

    fetchData = () => {
        console.log(this.props.scroll.count);
        if (this.props.scroll.count + 2 >= this.props.employees.data.length) {
            this.props.tillTheEnd();
            return;
        }
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(this.props.employees.data.slice(this.props.scroll.count + 2, this.props.scroll.count + 4)),
            });
            this.props.showMore();
        }, 1200);
    };

    render() {
        return (
            <div className="ui container ">
                    <InfiniteScroll
                        dataLength={this.state.items.length} //This is important field to render the next data
                        next={this.fetchData}
                        hasMore={this.props.scroll.hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{textAlign: 'center'}}>
                                <b>Yay! You have meet all the employees!</b>
                            </p>
                        }>
                        {
                            this.state.items.map(el => {
                                let avatarUrl = "";
                                const linkUrl = `/managers/${el._id}`;
                                console.log(el.manager);
                                const managerUrl = (el.manager === undefined || el.manager === "" || el.manager === "None")? "" : `/employees/${el.manager.id}`;
                                if (el.avatar !== "Icon") {
                                    avatarUrl = "http://localhost:4000/" + el.avatar;
                                } else {
                                    if (el.gender === "Male") {
                                        avatarUrl = "http://localhost:4000/defaultMale.png";
                                    } else {
                                        avatarUrl = "http://localhost:4000/defaultFemale.png";
                                    }
                                }
                                const callLink = `tel:${el.cell}`;
                                const emailLink = `mailto:${el.email}`;
                                return (
                                    <Card className="scrollingCard" key={el.id} centered>
                                        <Card.Content>
                                            <Image floated='right' size='mini' src={avatarUrl}/>
                                            <Card.Header>{el.name}</Card.Header>
                                            {
                                                (el.manager === undefined || el.manager === "" || el.manager === "None") ? <Card.Meta>A {el.gender} {el.title}</Card.Meta> :
                                                    <Card.Meta>A {el.gender} {el.title} managed by <Link to={managerUrl}>{el.manager.name}</Link></Card.Meta>
                                            }
                                            <Card.Description>
                                                {
                                                    el.cell === "" ? "" : <a href={callLink}>{el.cell}</a>
                                                }
                                            </Card.Description>
                                            <Card.Description>
                                                {
                                                    el.email === "" ? "" : <a href={emailLink}>{el.email}</a>
                                                }
                                            </Card.Description>
                                        </Card.Content>
                                        <div className="extra content">
                                            <a>
                                                <i className="user icon"></i>
                                                <Link to={linkUrl}>
                                                    {el.direct_reports.length} {el.direct_reports.length < 2 ? "Direct Report" : "Direct Reports"}
                                                </Link>
                                            </a>
                                        </div>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button basic color='black' onClick={() => this.props.profileHandler(el)}>
                                                    <ProfileIcon/>
                                                    Profile
                                                </Button>
                                                <Button basic color='black' onClick={() => this.props.deleteHandler(el._id)}>
                                                    <DeleteIcon/>
                                                    Delete
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                )
                            })
                        }
                    </InfiniteScroll>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        employees: state.employees,
        scroll: state.scroll
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showMore: () => {
            dispatch({type: "SHOW_MORE"});
        },
        tillTheEnd: () => {
            dispatch({type: "TILL_THE_END"});
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Scroll);

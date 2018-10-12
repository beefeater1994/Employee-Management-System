import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";

const HomepageHeading = (props) =>{
    console.log(props);
    return (
        <Container text>
            <Header
                as='h1'
                content='Employee Management System'
                inverted
                style={{
                    fontSize: props.mobile ? '2em' : '3em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: props.mobile ? '1.5em' : '4em',
                }}
            />
            <Header
                as='h2'
                content='Know and work with your employees better!'
                inverted
                style={{
                    fontSize: props.mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: props.mobile ? '0.5em' : '1.5em',
                }}
            />
            <Button primary size='huge' onClick={props.tableButtonHandler}>
                Get Started
                <Icon name='right arrow' />
            </Button>
        </Container>
    )
}

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Button as='a' inverted onClick={this.props.tableButtonHandler}>
                                    Table Home
                                </Button>
                                <Button as='a' inverted onClick={this.props.scrollButtonHandler}>
                                    Card Home
                                </Button>
                            </Container>
                        </Menu>
                        <HomepageHeading tableButtonHandler={this.props.tableButtonHandler}/>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

class MobileContainer extends Component {
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
                        <Menu.Item as='a' active>
                            <Button as='a' inverted onClick={this.props.tableButtonHandler}>
                                Table Home
                            </Button>
                            <Button as='a' inverted onClick={this.props.scrollButtonHandler}>
                                Card Home
                            </Button>
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handlePusherClick}
                        style={{ minHeight: '100vh' }}
                    >
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 350, padding: '1em 0em' }}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile tableButtonHandler={this.props.tableButtonHandler}/>
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = (props) => {
    const scrollButtonHandler = () => {
        props.scrollButtonHandler();
    };
    const tableButtonHandler = () => {
        props.tableButtonHandler();
    };
    return (
        <div>
            <DesktopContainer scrollButtonHandler={scrollButtonHandler} tableButtonHandler={tableButtonHandler}>{props.children}</DesktopContainer>
            <MobileContainer scrollButtonHandler={scrollButtonHandler} tableButtonHandler={tableButtonHandler}>{props.children}</MobileContainer>
        </div>
    )
}

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = (props) => {
    const scrollButtonHandler = () => {
        props.goToScrollMode();
        props.history.push(`/employees`);
    };
    const tableButtonHandler = () => {
        props.goToTableMode();
        props.history.push(`/employees`);
    };
    return (
        <ResponsiveContainer scrollButtonHandler={scrollButtonHandler} tableButtonHandler={tableButtonHandler}>
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='About' />
                                <List link inverted>
                                    <List.Item as='a'>&copy; 2018 Eric Fan</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Front End' />
                                <List link inverted>
                                    <List.Item as='a'>React/Redux/Thunk</List.Item>
                                    <List.Item as='a'>Semantic UI</List.Item>
                                    <List.Item as='a'>Material UI</List.Item>
                                    <List.Item as='a'>Axios</List.Item>
                                    <List.Item as='a'>...</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header inverted as='h4' content='Back End' />
                                <List link inverted>
                                    <List.Item as='a'>Node.js/Express</List.Item>
                                    <List.Item as='a'>Mongodb/Mongoose</List.Item>
                                    <List.Item as='a'>Multer</List.Item>
                                    <List.Item as='a'>RESTful API</List.Item>
                                    <List.Item as='a'>...</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </ResponsiveContainer>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        resetScrollCount: ()=> {
            dispatch({type: "RESET_SCROLL_COUNT"});
        },
        goToScrollMode: ()=> {
            dispatch({type: "SCROLL_MODE"});
        },
        goToTableMode: ()=> {
            dispatch({type: "TABLE_MODE"});
        }
    }
};

export default connect(null, mapDispatchToProps)(HomepageLayout);
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react" 
import Link from "next/link"

export default function MenuWeb(){
    return(
    <div className="menu">
        <Container>
            <Grid>
                <Grid.Column className="menu__left" width={6}>
                    <MenuPlatforms></MenuPlatforms>
                </Grid.Column>
                <Grid.Column className="menu__right" width={10}>
                    <MenuOptions></MenuOptions>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
    )
}


function MenuPlatforms(){
    return(
        <Menu>
            <Link href="/nv">
                <Menu.Item as="a">
                NV
                </Menu.Item>
            </Link>
        </Menu>
    )
}

function MenuOptions(){
    return(
        <Menu>
            <Menu.Item>
            <Icon name="user outline"/>
            Mi cuenta
        </Menu.Item>
        </Menu>
    )
}
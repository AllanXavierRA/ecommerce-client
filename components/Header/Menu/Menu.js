import { useState } from "react"; 
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react" 
import Link from "next/link"
import BasicModal from "../../modal/BasicModal"
import Auth from "../../Auth/";

export default function MenuWeb(){
    const [ showModal, setShowModal ] = useState(false);
    const [ titleModal, setTitleModal ] = useState("Inicia sesión")
    
    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);

    return(
    <div className="menu">
        <Container>
            <Grid>
                <Grid.Column className="menu__left" width={6}>
                    <MenuPlatforms></MenuPlatforms>
                </Grid.Column>
                <Grid.Column className="menu__right" width={10}>
                    <MenuOptions onShowModal={onShowModal}></MenuOptions>
                </Grid.Column>
            </Grid>
        </Container>
        <BasicModal show={showModal} setShow={setShowModal} 
        title={titleModal } 
        size="small"
        >
            <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal}/>
        </BasicModal>
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

function MenuOptions(props){
    const{ onShowModal } = props;

    
    return(
        <Menu>
            <Menu.Item onClick={onShowModal}>
            <Icon name="user outline"/>
            Mi cuenta
        </Menu.Item>
        </Menu>
    )
}
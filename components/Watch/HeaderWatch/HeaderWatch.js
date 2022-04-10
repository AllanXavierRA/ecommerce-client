import React, { useState, useEffect } from "react";
import { Grid, Image, Icon, Button } from "semantic-ui-react";
import { size } from "lodash";

export default function HeaderWatch(props){
    const { watch } = props;
    const { poster, title } = watch; 
    console.log(watch);

    return (
        <Grid className="header-watch">
            <Grid.Column mobile={16} tablet={6} computer={5}>
                <Image src={poster.url} alt={title} fluid />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={11}>
                <Info watch={watch}/>
            </Grid.Column>
        </Grid>
    )
}

function Info(props){
    const { watch } = props;
    const { title, sumary, price, discount } = watch;
    
    return(
        <>
        <div className="header-watch__title">
            {title}
            <Icon name="heart outline" link/>
        </div>
        <div className="header-watch__delivery">Entrega en 24/48 horas</div>
        <div className="header-watch__sumary" dangerouslySetInnerHTML={{__html: sumary}}/>
        <div className="header-watch__buy">
            <div className="header-watch__buy-price">
                <p>Precio de venta al público: {price}$</p>
                <div className="header-watch__buy-price-actions">
                    <p>-{discount}%</p>
                    <p>{price - Math.floor(price*discount) / 100}$</p>
                </div>
            </div>
            <Button className="header-watch__buy-btn">Comprar</Button>
        </div>
        </>
    )
}
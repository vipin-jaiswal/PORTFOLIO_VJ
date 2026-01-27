import React from "react";

const projectCard = () => {
    return (


    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route component={NotFound} />
    </Switch>

    )
}
export default projectCard;
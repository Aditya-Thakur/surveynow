import React from 'react';
import './home.css';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="banner">
                    <div className="quote">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae labore magnam!
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(event) => {
                            event.preventDefault();
                            history.push('/create-survey');
                        }}
                    >
                        Create Survey
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home

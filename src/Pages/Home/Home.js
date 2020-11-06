import React from 'react';
import Question from '../../components/Question/Question';
import CurrentQuestion from '../../components/Question/CurrentQuestion';

const Home = () => {
    const question = [];

    return <div className="Home">

        <h2 className="text-center">Aktualen vupros</h2>

        {Array(1)
            .fill()
            .map((_, index) => (
                <div key={index} className="row container">
                    <CurrentQuestion
                        image="https://cdn.pixabay.com/photo/2020/10/01/17/11/temple-5619197_960_720.jpg"
                        userName={"go6o " + index + 1}
                        createdOn={new Date().toUTCString()}
                        question={"Q & A"}
                    />
                </div>
                        ))}

    </div>
}

export default Home;
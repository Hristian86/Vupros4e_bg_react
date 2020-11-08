import React from 'react';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import CurrentQuestion from '../../components/Question/CurrentQuestion';

const ForumPage = () => {
    const [{ fetchData }, dispatch] = useStateValue();

    return <div className="container-fluid bg-light">

        <div className="container-fluid" >
                {fetchData[0]?.questions.map((data, index) => (
                    <div className="">
                        
                        
                        <CurrentQuestion
                            id={data?.id}
                            negativeVotes={data?.negativeVotes}
                            positiveVotes={data?.positiveVotes}
                            title={data?.title ? data.title : null}
                            votesCount={data.votesCount}
                            commentsCount={data?.commentsCount}
                            actual={data?.isActual}

                            image={data?.imageUrl ? data.imageUrl : null}
                            userName={"go6o " + index ? index : null + 1}
                            createdOn={new Date(data?.createdOn).toUTCString() ? new Date(data?.createdOn).toUTCString() : null}
                            question={data?.description ? data?.description : null}
                            
                        />


                    </div>
                ))}

        </div>
    </div>
}
export default ForumPage;
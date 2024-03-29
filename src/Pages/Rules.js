import React from "react";
import Navbar from "../Components/Navbar";
import BG from "../Images/pre.jpg";

export default function Rules() {
    return (
        <div style={{height: "100vh"}}>
        <div id="bg">
            
                <Navbar />
                <section className="text-light">
                    <div className="main my-4">
                        <div>
                            <h1 className="text-center display-3">Rules</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="text-center max-auto d-flex justify-content-center">
                       
                        <table className="table table-dark text-white w-75 pt-5" >
                            <tr style={{borderTop: "none"}}>
                                <td>Deadline to predict the scorelines for each gameweek is one hour before the kickoff of the first game of that particular week</td>
                            </tr>
                            <tr style={{borderTop: "none"}}>
                                <td>If you do not submit your predictions before the time ends, the portal which allows you to predict shall close and any unsaved changes will be lost</td>
                            </tr>
                            <tr style={{borderTop: "none"}}>
                                <td>Points will be alloted as follows (the first occurence will only be considered) :-
                                    <ul>
                                        <p>Exact scoreline match with |GD| &gt; 3: 10 points</p>
                                        <p>Exact scoreline match : 5 points</p>
                                        <p>Correct goal difference(GD of 0 doesn't count) : 3 points</p>
                                        <p>Correct result(winning team/draw) : 2 points</p>
                                        <p>Wrong result : 0 points</p>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
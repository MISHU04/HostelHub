import './About.css';

function About(){
    let message = "Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."
    return(
        <div className='wr'>
           <section className="section-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                      <h2 className="section-title">
                        The Team Behind HostelHub
                      </h2>
                      <p className="section-subtitle">{message}
                      </p>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                           <img src="" className="team-img" alt="pic"></img> 
                           <h3> VIJAY SHARMA </h3>
                           <div className="team-info">
                            <p> Undergrad at NIT PATNA</p>
                           </div>
                           <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                           </p>
                           <ul className="team-icon">
                            <li><a href="https://twitter.com/" className="twitter">Twitter
                                <i className="fa fa- twitter"></i>
                                </a></li>

                                <li><a href="https://www.linkedin.com/" className="LinkedIn">
                                <i class="fa-brands fa-linkedin"></i>
                                </a></li>
                           </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                           <img src="" className="team-img" alt="pic"></img> 
                           <h3> SWATI KUMARI </h3>
                           <div className="team-info">
                            <p> Undergrad at NIT PATNA</p>
                           </div>
                           <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                           </p>
                           <ul className="team-icon">
                            <li><a href="https://twitter.com/" className="twitter">Twitter
                                <i className="fa fa- twitter"></i>
                                </a></li>

                                <li><a href="https://www.linkedin.com/" className="LinkedIn">
                                <i class="fa-brands fa-linkedin"></i>
                                </a></li>                                
                           </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                           <img src="" className="team-img" alt="pic"></img> 
                           <h3> MISHU </h3>
                           <div className="team-info">
                            <p> Undergrad at NIT PATNA</p>
                           </div>
                           <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                           </p>
                           <ul className="team-icon">
                            <li><a href="https://twitter.com/" className="twitter">Twitter
                                <i className="fa fa- twitter"></i>
                                </a></li>

                                <li><a href="https://www.linkedin.com/" className="LinkedIn">
                                <i class="fa-brands fa-linkedin"></i>
                                </a></li>
                                

                           </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                           <img src="" className="team-img" alt="pic"></img> 
                           <h3> ZIKRA SHAMIM </h3>
                           <div className="team-info">
                            <p> Undergrad at NIT PATNA</p>
                           </div>
                           <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                           </p>
                           <ul className="team-icon">
                            <li><a href="https://twitter.com/" className="twitter">Twitter
                                <i className="fa fa- twitter"></i>
                                </a></li>

                                <li><a href="https://www.linkedin.com/" className="LinkedIn">
                                <i class="fa-brands fa-linkedin"></i>
                                </a></li>


                           </ul>
                        </div>
                    </div>

                </div>
            </div>
           </section>
        </div>
    
    )
}
export default About;

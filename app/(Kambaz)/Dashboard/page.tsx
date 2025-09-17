import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            {/* Dashboard Title */}
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            {/* Published Courses */}
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr />

            <div id="wd-dashboard-courses">
                {/* Course 1 */}
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/react.png" width={200} height={150} alt="ReactJS" />
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack Software Developer
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 2 */}
                <div className="wd-dashboard-course">
                    <Link href="/Courses/5678" className="wd-dashboard-course-link">
                        <Image src="/images/quantum.jpg" width={200} height={150} alt="Quantum Computing" />
                        <div>
                            <h5>PH5678 Quantum Computing</h5>
                            <p className="wd-dashboard-course-title">
                                Algorithms and Applications in Quantum Tech
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 3 */}
                <div className="wd-dashboard-course">
                    <Link href="/Courses/9012" className="wd-dashboard-course-link">
                        <Image src="/images/astro.png" width={200} height={150} alt="Astronomy" />
                        <div>
                            <h5>AS9012 Modern Astronomy</h5>
                            <p className="wd-dashboard-course-title">
                                Exploring the Universe and Galaxies
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 4 */}
                <div className="wd-dashboard-course">
                    <Link href="/Courses/3456" className="wd-dashboard-course-link">
                        <Image src="/images/game.png" width={200} height={150} alt="Game Development" />
                        <div>
                            <h5>GD3456 Game Development</h5>
                            <p className="wd-dashboard-course-title">
                                Building 2D & 3D Games with Unity
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 5 */}
                <div className="wd-dashboard-course">
                    <Link href="/Courses/7890" className="wd-dashboard-course-link">
                        <Image src="/images/ai.png" width={200} height={150} alt="AI" />
                        <div>
                            <h5>AI7890 Artificial Intelligence</h5>
                            <p className="wd-dashboard-course-title">
                                Machine Learning and Neural Networks
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 6 */}
                <div className="wd-dashboard-course">
                    <Link href="/Courses/2222" className="wd-dashboard-course-link">
                        <Image src="/images/cyber.png" width={200} height={150} alt="Cybersecurity" />
                        <div>
                            <h5>CY2222 Cybersecurity</h5>
                            <p className="wd-dashboard-course-title">
                                Protecting Systems and Networks
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 7 */}
                <div className="wd-dashboard-course">
                    <Link href="/Courses/3333" className="wd-dashboard-course-link">
                        <Image src="/images/dv.jpg" width={200} height={150} alt="Data Visualization" />
                        <div>
                            <h5>DS3333 Data Visualization</h5>
                            <p className="wd-dashboard-course-title">
                                Telling Stories with Data and D3.js
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

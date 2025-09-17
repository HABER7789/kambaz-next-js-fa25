export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" />
            <br />
            <br />

            <textarea
                id="wd-description"
                defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Netlify: 

Your full name and section
Links to each of the lab assignments
Link to the Kambaz application
Links to all relevant source code repositories
The Kambaz application should include a link to navigate back to the landing page.`}
            />
            <br />

            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" type="number" defaultValue={100} />
                        </td>
                    </tr>

                    {/* Assignment Group */}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-assignment-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-assignment-group" defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </select>
                        </td>
                    </tr>

                    {/* Display Grade as */}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                                <option value="PERCENTAGE">Percentage</option>
                                <option value="POINTS">Points</option>
                                <option value="LETTER_GRADE">Letter Grade</option>
                                <option value="GPA">GPA Scale</option>
                            </select>
                        </td>
                    </tr>

                    {/* Submission Type */}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type" defaultValue="ONLINE">
                                <option value="ONLINE">Online</option>
                                <option value="ON_PAPER">On Paper</option>
                                <option value="NO_SUBMISSION">No Submission</option>
                            </select>
                        </td>
                    </tr>

                    {/* Online Entry Options */}
                    <tr>
                        <td align="right" valign="top">Online Entry Options</td>
                        <td>
                            <div>
                                <input
                                    type="checkbox"
                                    id="wd-online-entry-text"
                                    name="wd-online-entry"
                                    value="TEXT_ENTRY"
                                    defaultChecked={false}
                                />
                                <label htmlFor="wd-online-entry-text"> Text Entry</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="wd-online-entry-url"
                                    name="wd-online-entry"
                                    value="WEBSITE_URL"
                                    defaultChecked={false}
                                />
                                <label htmlFor="wd-online-entry-url"> Website URL</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="wd-online-entry-media"
                                    name="wd-online-entry"
                                    value="MEDIA_RECORDINGS"
                                    defaultChecked={false}
                                />
                                <label htmlFor="wd-online-entry-media"> Media Recordings</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="wd-online-entry-annotation"
                                    name="wd-online-entry"
                                    value="STUDENT_ANNOTATION"
                                    defaultChecked={false}
                                />
                                <label htmlFor="wd-online-entry-annotation">
                                    {" "}
                                    Student Annotation
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="wd-online-entry-file"
                                    name="wd-online-entry"
                                    value="FILE_UPLOADS"
                                    defaultChecked={false}
                                />
                                <label htmlFor="wd-online-entry-file"> File Uploads</label>
                            </div>
                        </td>
                    </tr>

                    {/* Assign To */}
                    <tr>
                        <td align="right" valign="top">Assign</td>
                        <td>
                            <label htmlFor="wd-assign-to" className="sr-only">
                                Assign to
                            </label>
                            <input
                                id="wd-assign-to"
                                defaultValue="Everyone"
                                aria-label="Assign to"
                            />
                        </td>
                    </tr>

                    {/* Due Date */}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-due-date">Due</label>
                        </td>
                        <td>
                            {/* HTML date inputs must use YYYY-MM-DD values */}
                            <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
                        </td>
                    </tr>

                    {/* Available From / Until */}
                    <tr>
                        <td align="right" valign="top">Available from</td>
                        <td>
                            <input
                                id="wd-available-from"
                                type="date"
                                defaultValue="2024-05-06"
                            />
                            &nbsp;&nbsp; <label htmlFor="wd-available-until">Until</label>{" "}
                            <input
                                id="wd-available-until"
                                type="date"
                                defaultValue="2024-05-20"
                            />
                        </td>
                    </tr>

                    {/* Actions */}
                    <tr>
                        <td />
                        <td>
                            <button type="button">Cancel</button>
                            &nbsp;
                            <button type="button">Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

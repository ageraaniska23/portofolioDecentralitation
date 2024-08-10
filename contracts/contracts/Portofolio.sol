// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Portfolio {
    address public admin;

    string public name;
    string public jobDesk;
    string public aboutMe;

    string public github;
    string public linkedin;
    string public instagram;
    string public email;
    string public twitter; 

    struct Certified {
        string title;
        string description;
        string institute;
        string urlVerify;
    }

    struct Education {
        string institute; 
        string datesAttended;
        string program;
        string description;
    }

    struct Experience {
        string companyName;
        string location;
        string position;
        string period;
        string description;
    }

    struct Blog {
        string title;
        string timestamp;
        string author;
        string description;
    }

    struct Project {
        string category;
        string uri;
        string title;
        string description; 
        string urlDemo;
        string urlRepository;
    }

    event ExperienceAdded(Experience experience); // Simplified event
    event ProjectAdded(Project project); // Simplified event
    event CertifiedAdded(Certified certified); // Simplified event
    event EducationAdded(Education education); // Simplified event
    event BlogAdded(Blog blog); // Simplified event

    Experience[] public experiences;
    Project[] public projects;
    Certified[] public certifications;
    Education[] public educationBackground;
    Blog[] public blogs;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not the owner");
        _;
    }   

    constructor() {
        admin = msg.sender;
    }

    function setName(string memory _name) public onlyAdmin {
        name = _name;
    }

    function getLinkedin() public view returns (string memory){
        return linkedin;
    }

    function getName() public view returns (string memory){
        return name;
    }

    function setJobDesk(string memory _jobDesk) public onlyAdmin {
        jobDesk = _jobDesk;
    }

    function getJobdesk() public view returns (string memory){
        return jobDesk;
    }

    function setAboutMe(string memory _aboutMe) public onlyAdmin {
        aboutMe = _aboutMe;
    }

    function getAboutMe() public view returns (string memory){
        return aboutMe;
    }

    function setGithub(string memory _github) public onlyAdmin {
        github = _github;
    }

    function setInstagram(string memory _instagram) public onlyAdmin {
        instagram = _instagram;
    }

    function setLinkedin(string memory _linkedin) public onlyAdmin {
        linkedin = _linkedin;
    }

    function setEmail(string memory _email) public onlyAdmin {
        email = _email;
    }

    function setTwitter(string memory _twitter) public onlyAdmin {
        twitter = _twitter;
    }

    function addExperience(
        string memory _companyName,
        string memory _location,
        string memory _position,
        string memory _period,
        string memory _description
    ) public onlyAdmin {
        Experience memory newExperience = Experience({
            companyName: _companyName,
            location: _location,
            position: _position,
            period: _period,
            description: _description
        });

        experiences.push(newExperience);
        emit ExperienceAdded(newExperience);
    }

    function getExperience() public view returns (Experience[] memory){
        return experiences;
    }

    function addProject(
        string memory _category,
        string memory _title,
        string memory _uri,
        string memory _description,
        string memory _urlDemo,
        string memory _urlRepository
    ) public onlyAdmin {
        Project memory newProject = Project({
            category: _category,
            title: _title,
            uri: _uri,
            description: _description,
            urlDemo: _urlDemo,
            urlRepository: _urlRepository
        });

        projects.push(newProject);
        emit ProjectAdded(newProject);
    }

    function getProject() public view returns (Project[] memory){
        return projects;
    }

    function addCertified(
        string memory _title,
        string memory _description,
        string memory _institute,
        string memory _urlVerify
        
    ) public onlyAdmin {
        Certified memory newCertified = Certified({
            title: _title,
            description: _description,
            institute: _institute,
            urlVerify: _urlVerify
        });
        certifications.push(newCertified);
        emit CertifiedAdded(newCertified);
    }

    function getCertified() public view returns (Certified[] memory){
        return certifications;
    }

    function addEducation(
        string memory _institute,
        string memory _datesAttended,
        string memory _program,
        string memory _description
    ) public onlyAdmin {
        Education memory newEducation = Education({
            institute: _institute,
            datesAttended: _datesAttended,
            program: _program,
            description: _description
        });

        educationBackground.push(newEducation);
        emit EducationAdded(newEducation);
    }

    function getEducation() public view returns (Education[] memory){
        return educationBackground;
    }

    function addBlog(
        string memory _title,
        string memory _timestamp,
        string memory _author,
        string memory _description
    ) public onlyAdmin {
        Blog memory newBlog = Blog({
            title: _title,
            timestamp: _timestamp,
            author: _author,
            description: _description
        });

        blogs.push(newBlog);
        emit BlogAdded(newBlog);
    }

    function getBlog() public view returns (Blog[] memory){
        return blogs;
    }

     function getEmail()public view returns (string memory){
        return email;
    }

    function getGithub() public view returns (string memory){
        return github;
    }

    function getInsagram() public view returns (string memory){
        return instagram;
    }

    function getTwiter() public view returns (string memory){
        return twitter;
    }

}

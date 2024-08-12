
import { useReadContract } from "thirdweb/react";
import { contract } from '../Wallet/Config';

export const useFetchContractData = () => {

    const Cv = "https://drive.google.com/file/d/1sP4zQyamM30QUDyxSKGapMTXZ5LrvQA_/view?usp=sharing";

    const { data: name, isLoading: isNameLoading } = useReadContract({
        contract,
        method: "function getName() view returns (string)",
        params: []
    });
    const { data: aboutMe, isLoading: isAboutMeLoading } = useReadContract({
        contract,
        method: "function getAboutMe() view returns (string)",
        params: []
    });

    const { data: Jobdesk, isLoading: isJobdeskLoading } = useReadContract({
        contract,
        method: "function getJobdesk() view returns (string)",
        params: []
    });

    const { data: projoect, isLoading: isProjectLoading } = useReadContract({
        contract,
        method: "function getProject() view returns ((string category, string uri, string title, string description, string urlDemo, string urlRepository)[])",
        params: []
    });

    const { data: blog, isLoading: isBlogLoading } = useReadContract({
        contract,
        method: "function getBlog() view returns ((string title, string timestamp, string author, string description)[])",
        params: []
    });

    // Data Sosmed
    const { data: email, isLoading: isEmailLoading } = useReadContract({
        contract,
        method: "function getEmail() view returns (string)",
        params: []
    });
    const { data: discord, isLoading: isdiscordLoading } = useReadContract({
        contract,
        // rename to discord
        method: "function getTwiter() view returns (string)",
        params: []
    });
    const { data: Linkedin, isLoading: isLinkedinLoading } = useReadContract({
        contract,
        method: "function getLinkedin() view returns (string)",
        params: []
    });
    const { data: Instagram, isLoading: isInstagramLoading } = useReadContract({
        contract,
        method: "function getInsagram() view returns (string)",
        params: []
    });
    const { data: Github, isLoading: isGithubLoading } = useReadContract({
        contract,
        method: "function getGithub() view returns (string)",
        params: []
    });

    const { data: experience, isLoading: isExperienceLoading } = useReadContract({
        contract,
        method: "function getExperience() view returns ((string companyName, string location, string position, string period, string description)[])",
        params: []
    });

    const { data: Certified, isLoading: isCertifiedLoading } = useReadContract({
        contract,
        method: "function getCertified() view returns ((string title, string description, string institute, string urlVerify)[])",
        params: []
    });

    const { data: Education, isLoading: isEducationLoading } = useReadContract({
        contract,
        method: "function getEducation() view returns ((string institute, string datesAttended, string program, string description)[])",
        params: []
    });


    const isLoading = isNameLoading || isEducationLoading || isAboutMeLoading || isCertifiedLoading || isExperienceLoading || isBlogLoading || isEmailLoading || isProjectLoading || isdiscordLoading || isLinkedinLoading || isJobdeskLoading || isInstagramLoading || isGithubLoading;

    return { name, aboutMe, Education, blog, email, isLoading, projoect, discord, Linkedin, Jobdesk, Instagram, Github, experience, Certified, Cv };
};
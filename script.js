// Data for publications
const publications = [
    {
        title: 'Influenza Forecasting',
        text: "In the 2018-19 influenza season, between 37.4 and 42.9 million people in the United States experienced flu like symptoms. From that number, 431 to 647 thousand were hospitalized and 36400 to 61200 (most of them children and seniors) succumbed to the disease. Due to the annual mutation of the very many strands of the flu virus, new vaccines must be developed and administered every flu season. Therefore, the prediction of the rate of growth in reported infection cases of each strand of the flu is paramount to ensuring the correct supply of vaccines per strand. A great tool for making future predictions using existing data is Machine learning - specifically Neural Networks. eVision (Epidemic Vision) is a software using Long Short-Term Memory (LSTM) neural networks under research and development by Santa Clara University\'s EPIC (Ethical, Pragmatic, and Intelligent Computing) and Bioinnovation & Design labs to predict the trend of influenza cases throughout the flu season using data from the CDC, WHO, and Google Trends in order to help pharmaceuticals decide on the ramping up or down of their development of tester kits, vaccines, and medicines weeks in advance.",
        link: 'https://dl.acm.org/doi/abs/10.1145/3378393.3402286',
        authors: 'Navid Shaghaghi, Andres Calle, George Kouretas',
        year: '2020',
    },
    {
        title: 'eVision: Influenza Forecasting Using CDC, WHO, and Google Trends Data',
        text:
            "Influenza, more commonly known as the flu, is a contagious respiratory illness caused by viruses which in the 2018–19 flu season, infected 37.4 to 42.9 million people in the United States alone. Of those, 431 to 647 thousand were hospitalized and 36,400 to 61,200 (most of them elderly and children) succumbed to the disease. At the time of this writing, the best known defense against influenza is vaccination. However, due to the annual mutation of the very many strands of the flu virus, new vaccines must be administered every flu season. Hence, the prediction of the rate of growth in reported infection cases of each strand of the flu is paramount to ensuring the correct supply of vaccines per strand. Machine learning - specifically Neural Networks - are a great tool for making future predictions using existing data. Long Short-Term Memory (LSTM) neural networks are utilized by Santa Clara University's EPIC (Ethical, Pragmatic, and Intelligent Computing) and BioInnovation & Design laboratories for continued research and development of a tool named eVision (Epidemic Vision) to predict the trend of influenza cases throughout the flu season. eVision has been trained on data gathered across 4 flu seasons from the 2014–15 season to the 2017–18 season of the Center for Disease Control and Prevention (CDC) records as well as the World Health Organization (WHO) and Google Trends search result data gathered across the same period of time. eVision has been able to make 7 weeks in advance predictions about the flu trend in the 2018–19 United States flu season with 90.15% accuracy. This paper is to report the achievements of eVision thus far and to delineate next phases for the project which aims to provide a tool for the pharmaceutical and healthcare industries to more accurately predict the trend of flu (and other) epidemics in order to meet the demands for vaccines and test kits ahead of time.",
        link:
            'https://ieeexplore.ieee.org/document/9311072',
        authors: 'Navid Shaghaghi, Andres Calle, Yuhang Qian',
        year: '2017',
    },
    {
        title: 'Expanding eVision\'s Scope of Influenza Forecasting',
        text:
            "According to the United States Center for Disease Control and Prevention (CDC) between 39 and 56 million people in the United States experienced flu like symptoms in the 2019-20 flue season. From which, 410 to 740 thousand were hospitalized and 24 to 62 thousand (most of them children or elderly) succumbed to the disease. Hence, the presence of an early warning mechanism that can alert pharmaceuticals, hospitals, and governments to the trends of the influenza season, would serve as a significant step in helping combat communicable diseases and reduce the mortality of child under the age of five. Both of which are among the targets for the 3rd United Nations (UN) Sustainable Development Goal (SDG): to ensure healthy lives and promote well-being for all at all ages.As reported in the [ACM Special Interest Group in Computers and Society (SIGCAS) 2020 Computers and Sustainable Societies (COMPASS)] and [IEEE Technology and Engineering Management Society (TEMS) 2020 International Conference on Artificial Intelligence for Good (AI4G)] Long Short-Term Memory (LSTM) neural networks are utilized by Santa Clara University’s EPIC (Ethical, Pragmatic, and Intelligent Computing) and BioInnovation & Design laboratories for continued research and development of an eVision (Epidemic Vision) tool to predict the trend of influenza cases throughout the flu season. There we reported eVision’s success in making 3 to 7 weeks in advance predictions for the 2018-2019 United States flu season with 90.15% accuracy on 7 week predictions and delineated future steps of 1) expanding eVision’s scope to study the effects of augmenting predictions with concurrent data from neighboring, near by, and developmentally similar countries/states with similar environmental conditions and 2) the introduction of confidence intervals for the predictions in order to account for the average error and thus increase the trustworthiness of eVision’s results. This paper is to report that as a result of those steps, both the Californian and Chilean 7 week forecasts improved by 1.98% and 7.89% respectively.",
        link:
            'https://ieeexplore.ieee.org/document/9342864',
        authors: 'Navid Shaghaghi, Andres Calle, George Kouretas',
        year: '2021',
    },
    {
        title: 'Expanding eVision\'s Granularity of Influenza Forecasting',
        text:
            "According to the United States’ Center for Disease Control and Prevention (CDC) between 39 and 56 million people in the US suffered from Influenza Like Illnesses (ILI) in the 2019-20 flue season. From which, 410 to 740 thousand were hospitalized and 24 to 62 thousand succumbed to the disease. Therefore, the existence of an early warning mechanism that can alert pharmaceuticals, healthcare providers, and governments to the trends of the influenza season well in advance, would serve as a significant step in helping combat this communicable disease and reduce mortality from it.\n As reported in the [ACM Special Interest Group in Computers and Society (SIGCAS) 2020 Computers and Sustainable Societies (COMPASS)], [IEEE Technology and Engineering Management Society (TEMS) 2020 International Conference on Artificial Intelligence for Good (AI4G)], and [IEEE Global Humanitarian Technology Conference (GHTC) 2020] Long Short-Term Memory (LSTM) neural networks are utilized by Santa Clara University’s EPIC (Ethical, Pragmatic, and Intelligent Computing) and BioInnovation & Design laboratories for continued research and development of an eVision (Epidemic Vision) machine learning tool to predict the trend of influenza cases throughout the flu season.\n There we reported eVision’s success in making 3, 7, and 14 weeks in advance predictions for the 2018–2019 United States flu season with 88.11%, 88%, and 74.18% accuracy respectively and delineated future steps of expanding eVision’s granularity by 1) adding state level predictions in order to enhance national predictions and 2) utilizing metropolitan area keyword trends to improve both state level and national predictions. This resulted in the improvement of the model’s accuracy to 90.38%, 91.43%, and 81.74% for 3, 7, and 14 weeks in advance predictions respectively. This paper is to report on the methodology of obtaining these improved results.",
        link:
            'https://link.springer.com/chapter/10.1007/978-3-030-70569-5_14',
        authors: 'Navid Shaghaghi, Andres Calle, George Kouretas, Supriya Karishetti & Tanmay Wagh',
        year: '2021',
    },
    {
        title: 'eVision: Epidemic Forecasting on COVID-19',
        text:
            "Vaccination is the primary strategy to prevent COVID-19 illness and hospitalization. However, supplies are scarce and due to the regional mutations of the virus, new vaccines or booster shots will need to be administered every so often. Hence, the prediction of the rate of growth in reported COVID-19 cases is paramount to ensuring the ample supply of vaccines as well as for local/state/federal government measures to ensure the availability of hospital beds, supplies, and staff.\n  eVision is an epidemic forecaster aimed at combining AI - in the form of a Long Short-Term Memory (LSTM) Recursive Neural Network (RNN) - and search engine statistics, in order to make accurate predictions about the weekly number of cases for highly communicable diseases. Starting on replicating an older Google model and then improving upon it, predictions are accurately made as far as seven weeks into the future with an accuracy rate of %91 for seasonal influenza.\n While many different kinds of forecasting models have been created to track the COVID-19 pandemic, they have missed the insight discovered by eVision on influenza: by simply providing the AI model with the relative popularity of carefully selected key phrases searched via Google along with the number of positive cases reported from the CDC and/or WHO the model can make highly accurate predictions about the trend of the outbreak by learning the relationship between the two trends. eVision is thus provided with a weekly count of the number of COVID-19 cases in a region along with statistics surrounding common search phrases such as “loss of smell” and “loss of taste” that have been searched via Google in that region since the start of the pandemic. It has, for instance, been able to achieve an accuracy of %89 for predicting the trend of the COVID-19 outbreak in the United States.",
        link:
            'https://www.degruyter.com/document/doi/10.1515/bmt-2021-6028/html',
        authors: 'Navid Shaghaghi, Andres Calle, George Kouretas, Jaidev Mirchandani, and Michael Castillo',
        year: '2021',
    },
    {
        title: 'Interplay of Influenza A/B Subtypes and COVID-19',
        text:
            "Influenza, or most commonly termed the flu, is a common respiratory illness caused by viral infection. The circulation of this virus is found year-round but is more common during the flu season: fall and winter. In the United States, the number of reported cases begins to rise in October, reaches a peak in December, and returns to normal in April. Even though there are four subtypes of the Influenza virus, the seasonal flu outbreaks in humans are caused by type A and B viruses. eVision utilizes influenza data provided by the United States Center for Disease Control and Prevention (CDC) and the World Health Organization (WHO) to analyze influenza A and B cases throughout the flu season. During the 2019–20 flu season, the positive influenza cases reported in the US were between 36 and 56 million, which is the highest over the past six years. However, during the 2020–21 flu season which is the first complete flu season within the COVID-19 pandemic, the reported flu cases reduced drastically to 1,899; of which 713 were caused by influenza A viruses, and 1,186 by influenza B viruses. This indicates that the number of flu B cases was higher than that of flu A which was not normally the case prior to the COVID-19 pandemic. It was further observed that flu B reached its peak either at the same time or earlier than flu A which is also unusual compared to the flu trends prior to the onset of the COVID-19 pandemic. This peculiar trend is also noted during the Severe Acute Respiratory Syndrome (SARS) outbreak in 2003. This paper reports the findings on deviation in the Influenza type A and type B trends during the circulation of Coronavirus in the US and Canada and provides possible reasons for these changes.",
        link:
            'https://ieeexplore.ieee.org/abstract/document/9677858',
        authors: 'Navid Shaghaghi, Supriya Karishetti, Nancy Ma',
        year: '2021',
    },
    {
        title: 'Attempts at Enhancing eVision’s Influenza Forecasting Using Social Media',
        text:
            'Prediction of the spread of infectious diseases such as the seasonal Influenza is of utmost importance in the preparation for and mitigation of the severity of their impact. eVision (short for Epidemic Vision) is a machine learning time series forecaster under research and development by Santa Clara University’s EPIC (Ethical, Pragmatic, and Intelligent Computing) and BioInnovation & Design laboratories. Since eVision’s Long Short-Term Memory (LSTM) neural network makes use of Influenza related keywords in Google Trends as prediction features, it stands to reason that further feature selection from trending keywords relating to the flu in social media posts could enhance its prediction. After close examination, the only social media platforms that prove capable of supplying relevant data for time series analysis are the Twitter micro-blogging and Reddit social news aggregation and discussion forum platforms; as other social media platforms are either meant for sharing images and videos, or private multi-cast communication rather than public broadcasting and discourse. However, due to the burstiness of flu related Reddit posts, no useful feature for time series forecasting can be extracted from that platform; and Twitter, which has been examined for Influenza forecasting by numerous other researchers with successful results, poses a number of obstacles such as changes in policy as well as placing features behind expensive paywalls through the disabling of existing free APIs. Regardless however, the results obtained by the addition of Twitter data as another feature in eVision’s LSTM resulted in an almost negligible predictive improvement as delineated in this paper.',
        link:
            'https://ieeexplore.ieee.org/abstract/document/10012095',
        authors: 'Navid Shaghaghi, Yash Kamdar, Ron Huang, Andres Calle, Jaidev Mirchandani, Michael Castillo',
        year: '2022',
    },
    {
        title: 'eVision: Forecasting the spread of Tuberculosis in India with Deep Learning',
        text:
            'Humanity has battled tuberculosis for all of recorded history. Some studies estimate that Mycobacterium tuberculosis may have been around as long as 3 million years but it was only in 1834 when Johann Schonlein officially presented the characteristics of it. Even though the TB epidemic has touched all corners of the world, Africa and Asia are the regions that currently suffer the worst consequences. The purpose of this study is to construct a model within the eVision forecasting environment, capable of forecasting the trend of Tuberculosis cases in India, as India is the country that accounts for the largest percentage of TB cases and deaths worldwide. And being able to make predictions for India may also lead to successful results for other regions in Asia and Africa.\n In order to do so, this study presents different test cases that show the effectiveness of the model, varying the number of steps for each one of the data sets created. It’s important to note, that these data sets are combinations of data gathered from the states with the most TB cases in India in the last years, as well as the total data for India, and supplemental data from Google Trends, as a way to facilitate the machine learning model. Even though the final results were respectable compared to past research done on India and other countries, the model nevertheless has a limitation on the number of weeks ahead which the predictions are still considered to be good; with 7 weeks being the optimal result.',
        link:
            'https://american-cse.org/csci2022-ieee/pdfs/CSCI2022-2lPzsUSRQukMlxf8K2x89I/202800b671/202800b671.pdf',
        authors: 'Juan Zuluaga, Michael Castillo, Divya Syal, Andres Calle, Navid Shaghaghi',
        year: '2022',
    },
    {
        title: 'Data gap/outlier correction and treatment',
        text:
            'The prevalence of gaps and outliers within datasets presents substantial challenges, particularly in the realm of time series fore-casting and various other predictive machine learning (ML) tasks. This paper, introduces an effective technique for correcting gaps and outliers in data and validates the approach by applying it to datasets with outlier zones drawn from three diverse contexts. This innovative technique holds promising potential to enhance the performance of machine learning models by treating the data to alleviate the complications posed by these issues and in doing so contributes a valuable tool to the data science toolbox.',
        link:
            'https://pubs.aip.org/aip/acp/article/3034/1/100003/3268599',
        authors: 'Juan Zuluaga, Michael Castillo, Divya Syal, Andres Calle, Navid Shaghaghi',
        year: '2024'
    }
];

// Data for team members, advisors, and past members
const teamMembers = [
    {
        name: 'Kaushil Kundalia',
        role: 'MS in Computer Science',
        content: 'I am a grad CS student. I love to build backend applications and I mostly look after the engineering side of things.',
        avatar: 'assets/kaushil.jpg',
        linkedin: 'https://www.linkedin.com/in/kaushil-kundalia-5b4772149'
    },
    {
        name: 'Juan Zuluaga',
        role: 'MS Computer Science and Engineering',
        content: '',
        avatar: 'assets/juan.png',
        linkedin: 'https://www.linkedin.com/in/juan-zuluaga02'
    },
    {
        name: 'Jefferson Warie',
        role: 'MS in Computer Science and Engineering',
        content: '',
        avatar: 'assets/jeff_2.jpeg',
        linkedin: 'https://www.linkedin.com/in/jefferson-warie-933a96250'
    }
];

const advisors = [
    {
        name: 'Navid Shaghaghi',
        role: 'Professor, Computer Science & Engineering (CSEN) @ SCU',
        content: 'Navid Shaghaghi is a lecturer and researcher in the departments of Computer Science & Engineering (CSEN) of the School of Engineering and also teaches a couple of courses in the department of Information Systems and Analytics (ISA) of the School of Business at Santa Clara University.',
        avatar: 'assets/Navid-Shaghaghi.jpg',
        linkedin: ''
    },
    {
        name: 'Andres Calle',
        role: 'Professor, Computer Science and Engineering @ West Valley College',
        content: 'I first entered SCU as a transfer student, switching my major from Biology to Computer Science. After first meeting Professor Shaghaghi in my second quarter at SCU, I would go on to work as a research assistant for him over the summer on various projects. I was brought on to the EPIC Lab due to my interest in Machine Learning, and together with a few of my peers, we began to develop computer vision software, flood monitoring systems, and flu prediction AI. Since that summer, I have completed my undergraduate and MS degrees at SCU and have moved on to pursuing my PhD at SCU and am also a faculty member at West Valley College.',
        avatar: 'assets/andres-calle.jpg',
        linkedin: 'https://www.linkedin.com/in/acalle'
    }
];

const pastMembers = [
    {
        name: 'Divya Syal',
        role: 'BS Computer Science and Engineering',
        avatar: 'assets/divya.jpg',
        linkedin: 'https://www.linkedin.com/in/divyasyal'
    },
    {
        name: 'Husain Unwalla',
        role: 'MS Computer Engineering',
        avatar: 'assets/Husain.jpeg',
        linkedin: 'https://www.linkedin.com/in/husainunwalla'
    },
    {
        name: 'Michael Castillo',
        role: 'BS Computer Science and Engineering',
        avatar: 'assets/michael-castillo.png',
        linkedin: 'https://www.linkedin.com/in/michaelvcastillo'
    },
    {
        name: 'Sreeja Malladi',
        role: 'MS Computer Engineering',
        avatar: 'assets/Sreeja_Photo.jpg',
        linkedin: 'https://www.linkedin.com/in/sreeja-malladi'
    },
    {
        name: 'Nancy Ma',
        role: 'B.S. 2023',
        avatar: 'assets/nancy-ma.jpeg',
        linkedin: 'https://www.linkedin.com/in/nancy-m-6b04801b0'
    },
    {
        name: 'George Kouretas',
        role: 'BS Bioengineering',
        avatar: 'assets/george-kouretas.jpeg',
        linkedin: 'https://www.linkedin.com/in/george-kouretas'
    },
    {
        name: 'Jaidev Mirchandani',
        role: 'M.S. 2022',
        avatar: 'assets/jaidev.png',
        linkedin: 'https://www.linkedin.com/in/jvmirchandani'
    },
    {
        name: 'Supriya Karishetti',
        role: 'M.S. 2021',
        avatar: 'assets/supriya.png',
        linkedin: 'https://www.linkedin.com/in/supriya-karishetti-084b91166'
    },
    {
        name: 'Namratha Kamath',
        role: 'B.S. 2021',
        avatar: 'assets/namratha.png',
        linkedin: 'https://www.linkedin.com/in/namratha-kamath-9663b9117'
    },
    {
        name: 'Bhupinder Jagwani',
        role: 'B.S. 2021',
        avatar: 'assets/blank-pfp.jpg',
        linkedin: ''
    },
    {
        name: 'Yoga Ramachandran',
        role: 'B.S. 2021',
        avatar: 'assets/yoga.jpeg',
        linkedin: 'https://www.linkedin.com/in/yoga-ramachandran'
    },
    {
        name: 'Yash Kamdar',
        role: 'M.S. 2021',
        avatar: 'assets/yash.png',
        linkedin: 'https://www.linkedin.com/in/yash-kamdar95'
    },
    {
        name: 'Ron Huang',
        role: 'B.S. 2021',
        avatar: 'assets/ron.png',
        linkedin: 'https://www.linkedin.com/in/ron23'
    },
    {
        name: 'Tanmay Wagh',
        role: 'M.S. 2021',
        avatar: 'assets/tanmay.png',
        linkedin: 'https://www.linkedin.com/in/tanmaywagh30'
    },
    {
        name: 'Liying Liang',
        role: 'B.S. 2021',
        avatar: 'assets/liying.png',
        linkedin: 'https://www.linkedin.com/in/liying-liang'
    },
    {
        name: 'Anika Shahi',
        role: 'B.A. 2020',
        avatar: 'assets/anika.png',
        linkedin: 'https://www.linkedin.com/in/anika-shahi-a5182185'
    },
    {
        name: 'Yuhang Qian',
        role: 'B.A. 2019',
        avatar: 'assets/blank-pfp.jpg',
        linkedin: ''
    },
    {
        name: 'Meghan McGinnis',
        role: 'M.S. 2020',
        avatar: 'assets/meghan.png',
        linkedin: 'https://www.linkedin.com/in/meghan-mcginnis-4b705a56'
    }
];

// Function to create a publication card
function createPublicationCard(publication) {
    return `
        <div class="publication-card">
            <div class="publication-year">Published in ${publication.year}</div>
            <h3>${publication.title}</h3>
            <p class="authors">${publication.authors}</p>
            <p class="abstract">${publication.text}</p>
            <a href="${publication.link}" class="view-more" target="_blank" rel="noopener noreferrer">
                View more
                <span class="arrow">→</span>
            </a>
        </div>
    `;
}

function createPersonCard(person) {
    const linkedInIcon = person.linkedin ? `
        <div class="linkedin-container">
            <a href="${person.linkedin}" class="linkedin-link" target="_blank" rel="noopener noreferrer">
                <img src="assets/linkedin_icon.png" alt="LinkedIn" class="linkedin-icon">
            </a>
        </div>
    ` : '';

    return `
        <div class="person-card">
            <div class="person-info">
                ${person.content ? `<p class="person-bio">${person.content}</p>` : ''}
                <div class="person-details">
                    <strong>${person.name}</strong> - ${person.role}
                </div>
                ${linkedInIcon}
            </div>
            <div class="person-avatar">
                <img src="${person.avatar}" alt="${person.name}">
            </div>
        </div>
    `;
}

// Function to load content
function loadContent() {
    // Load publications
    const publicationsGrid = document.querySelector('.publications-grid');
    publicationsGrid.innerHTML = publications.map(createPublicationCard).join('');

    // Load team members
    const teamGrid = document.querySelector('.team-grid');
    teamGrid.innerHTML = teamMembers.map(createPersonCard).join('');

    // Load advisors
    const advisorsGrid = document.querySelector('.advisors-grid');
    advisorsGrid.innerHTML = advisors.map(createPersonCard).join('');

    // Load past members
    const pastMembersGrid = document.querySelector('.past-members-grid');
    pastMembersGrid.innerHTML = pastMembers.map(createPersonCard).join('');
}

// Call loadContent when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadContent);

document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});
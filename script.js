// Data for publications
const publications = [
    {
        title: 'Influenza Forecasting',
        text: 'In the 2018-19 influenza season, between 37.4 and 42.9 million people in the United States experienced flu like symptoms. From that number, 431 to 647 thousand were hospitalized and 36400 to 61200 (most of them children and seniors) succumbed to the disease. Due to the annual mutation of the very many strands of the flu virus, new vaccines must be developed and administered every flu season. Therefore, the prediction of the rate of growth in reported infection cases of each strand of the flu is paramount to ensuring the correct supply of vaccines per strand.',
        link: 'https://dl.acm.org/doi/abs/10.1145/3378393.3402286',
        authors: 'Navid Shaghaghi, Andres Calle, George Kouretas',
        year: '2020',
    },
    {
        title: 'eVision: Influenza Forecasting Using CDC, WHO, and Google Trends Data',
        text:
            "Influenza, more commonly known as the flu, is a contagious respiratory illness caused by viruses which in the 2018–19 flu season, infected 37.4 to 42.9 million people in the United States alone. Of those, 431 to 647 thousand were hospitalized and 36,400 to 61,200 (most of them elderly and children) succumbed to the disease.",
        link:
            'https://ieeexplore.ieee.org/document/9311072',
        authors: 'Navid Shaghaghi, Andres Calle, Yuhang Qian',
        year: '2017',
    },
    {
        title: 'Expanding eVision\'s Scope of Influenza Forecasting',
        text:
            "According to the United States Center for Disease Control and Prevention (CDC) between 39 and 56 million people in the United States experienced flu like symptoms in the 2019-20 flue season. From which, 410 to 740 thousand were hospitalized and 24 to 62 thousand (most of them children or elderly) succumbed to the disease. Hence, the presence of an early warning mechanism that can alert pharmaceuticals, hospitals, and governments to the trends of the influenza season, would serve as a significant step in helping combat communicable diseases and reduce the mortality of child under the age of five. Both of which are among the targets for the 3rd United Nations (UN) Sustainable Development Goal (SDG): to ensure healthy lives and promote well-being for all at all ages.",
        link:
            'https://ieeexplore.ieee.org/document/9342864',
        authors: 'Navid Shaghaghi, Andres Calle, George Kouretas',
        year: '2021',
    },
    {
        title: 'Expanding eVision\'s Granularity of Influenza Forecasting',
        text:
            "According to the United States\' Center for Disease Control and Prevention (CDC) between 39 and 56 million people in the US suffered from Influenza Like Illnesses (ILI) in the 2019-20 flue season. From which, 410 to 740 thousand were hospitalized and 24 to 62 thousand succumbed to the disease. Therefore, the existence of an early warning mechanism that can alert pharmaceuticals, healthcare providers, and governments to the trends of the influenza season well in advance, would serve as a significant step in helping combat this communicable disease and reduce mortality from it.",
        link:
            'https://link.springer.com/chapter/10.1007/978-3-030-70569-5_14',
        authors: 'Navid Shaghaghi, Andres Calle, George Kouretas, Supriya Karishetti & Tanmay Wagh',
        year: '2021',
    },
    {
        title: 'eVision: Epidemic Forecasting on COVID-19',
        text:
            "Vaccination is the primary strategy to prevent COVID-19 illness and hospitalization. However, supplies are scarce and due to the regional mutations of the virus, new vaccines or booster shots will need to be administered every so often. Hence, the prediction of the rate of growth in reported COVID-19 cases is paramount to ensuring the ample supply of vaccines as well as for local/state/federal government measures to ensure the availability of hospital beds, supplies, and staff.  eVision is an epidemic forecaster aimed at combining AI - in the form of a Long Short-Term Memory (LSTM) Recursive Neural Network (RNN) - and search engine statistics, in order to make accurate predictions about the weekly number of cases for highly communicable diseases. Starting on replicating an older Google model and then improving upon it, predictions are accurately made as far as seven weeks into the future with an accuracy rate of %91 for seasonal influenza.",
        link:
            'https://www.degruyter.com/document/doi/10.1515/bmt-2021-6028/html',
        authors: 'Navid Shaghaghi, Andres Calle, George Kouretas, Jaidev Mirchandani, and Michael Castillo',
        year: '2021',
    },
    {
        title: 'Interplay of Influenza A/B Subtypes and COVID-19',
        text:
            "Influenza, or most commonly termed the flu, is a common respiratory illness caused by viral infection. The circulation of this virus is found year-round but is more common during the flu season: fall and winter. In the United States, the number of reported cases begins to rise in October, reaches a peak in December, and returns to normal in April. Even though there are four subtypes of the Influenza virus, the seasonal flu outbreaks in humans are caused by type A and B viruses. eVision utilizes influenza data provided by the United States Center for Disease Control and Prevention (CDC) and the World Health Organization (WHO) to analyze influenza A and B cases throughout the flu season. During the 2019–20 flu season, the positive influenza cases reported in the US were between 36 and 56 million, which is the highest over the past six years. However, during the 2020–21 flu season which is the first complete flu season within the COVID-19 pandemic, the reported flu cases reduced drastically to 1,899; of which 713 were caused by influenza A viruses, and 1,186 by influenza B viruses",
        link:
            'https://ieeexplore.ieee.org/abstract/document/9677858',
        authors: 'Navid Shaghaghi, Supriya Karishetti, Nancy Ma',
        year: '2021',
    },
    {
        title: 'Attempts at Enhancing eVision’s Influenza Forecasting Using Social Media',
        text:
            'Prediction of the spread of infectious diseases such as the seasonal Influenza is of utmost importance in the preparation for and mitigation of the severity of their impact. eVision (short for Epidemic Vision) is a machine learning time series forecaster under research and development by Santa Clara University’s EPIC (Ethical, Pragmatic, and Intelligent Computing) and BioInnovation & Design laboratories.',
        link:
            'https://ieeexplore.ieee.org/abstract/document/10012095',
        authors: 'Navid Shaghaghi, Yash Kamdar, Ron Huang, Andres Calle, Jaidev Mirchandani, Michael Castillo',
        year: '2022',
    },
    {
        title: 'eVision: Forecasting the spread of Tuberculosis in India with Deep Learning',
        text:
            'Humanity has battled tuberculosis for all of recorded history. Some studies estimate that Mycobacterium tuberculosis may have been around as long as 3 million years but it was only in 1834 when Johann Schonlein officially presented the characteristics of it. Even though the TB epidemic has touched all corners of the world, Africa and Asia are the regions that currently suffer the worst consequences.',
        link:
            'https://american-cse.org/csci2022-ieee/pdfs/CSCI2022-2lPzsUSRQukMlxf8K2x89I/202800b671/202800b671.pdf',
        authors: 'Juan Zuluaga, Michael Castillo, Divya Syal, Andres Calle, Navid Shaghaghi',
        year: '2022',
    }
];

// Data for team members, advisors, and past members
const teamMembers = [
    {
        name: 'Navid Shaghaghi',
        role: 'Professor, department of Mathematics and Computer Science',
        content: 'Navid Shaghaghi is a lecturer and researcher in the department of Mathematics and Computer Science (MCS) of the College of Arts and Sciences and the departments of Computer Science & Engineering (CSEN) and Bioenginneering (BIOE) of the School of Engineering. He also teaches a couple of courses in the department of Information Systems and Analytics (ISA) of the School of Business at Santa Clara University.',
        avatar: 'assets/Navid-Shaghaghi.jpg'
    },
    {
        name: 'Kaushil Kundalia',
        role: 'MS in Computer Science',
        content:
            'I am a grad CS student. I love to build backend applications and I mostly look after the engineering side of things.',
        avatar:
            'assets/kaushil.jpg'
    },
    {
        name: 'Juan Zuluaga',
        role: 'MS Computer Science and Engineering',
        content: '',
        avatar:
            'assets/juan.png'
    },
    {
        name: 'Jefferson Warie',
        role: 'MS in Computer Science and Engineering',
        content: '',
        avatar:
            'assets/blank-pfp.jpg'
    }
];

const advisors = [
    {
        name: 'Andres Calle',
        role: 'MS Computer Science and Engineering',
        content:
            'I first entered SCU as a transfer student, switching my major from Biology to Computer Science. After first meeting Professor Shaghaghi in my second quarter at SCU, I would go on to work as a research assistant for him over the summer on various projects. I was brought on to the EPIC Lab due to my interest in Machine Learning, and together with a few of my peers, we began to develop computer vision software, flood monitoring systems, and flu prediction AI. Since that summer, I have completed my undergraduate degree in SCU and have moved on to pursuing my masters, working as a Research Assistant to the Bioinnovation Lab and still working very closely with the EPIC Lab.',
        avatar:
            'assets/andres-calle.jpg'
    }
];

const pastMembers = [
    {
        name: 'Meghan McGinnis',
        role: 'M.S. 2020',
        avatar: 'assets/meghan.png'
    },
    {
        name: 'Yuhang Qian',
        role: 'B.A. 2019',
        avatar: 'assets/blank-pfp.jpg'
    },
    {
        name: 'Anika Shahi',
        role: 'B.A. 2020',
        avatar: 'assets/anika.png'
    },
    {
        name: 'Liying Liang',
        role: 'B.S. 2021',
        avatar: 'assets/liying.png'
    },
    {
        name: 'Tanmay Wagh',
        role: 'M.S. 2021',
        avatar: 'assets/tanmay.png'
    },
    {
        name: 'Ron Huang',
        role: 'B.S. 2021',
        avatar: 'assets/ron.png'
    },
    {
        name: 'Yash Kamdar',
        role: 'M.S. 2021',
        avatar: 'assets/yash.png'
    },
    {
        name: 'Yoga Ramachandran',
        role: 'B.S. 2021',
        avatar: 'assets/blank-pfp.jpg'
    },
    {
        name: 'Bhupinder Jagwani',
        role: 'B.S. 2021',
        avatar: 'assets/blank-pfp.jpg'
    },
    {
        name: 'Namratha Kamath',
        role: 'B.S. 2021',
        avatar: 'assets/namratha.png'
    },
    {
        name: 'Supriya Karishetti',
        role: 'M.S. 2021',
        avatar: 'assets/supriya.png'
    },
    {
        name: 'Jaidev Mirchandani',
        role: 'M.S. 2022',
        avatar: 'assets/jaidev.png'
    },
    {
        name: 'George Kouretas',
        role: 'BS Bioengineering',
        avatar:
            'assets/george-kouretas.jpeg'
    },
    {
        name: 'Nancy Ma',
        role: 'B.S. 2023',
        avatar: 'assets/nancy-ma.jpeg'
    },
    {
        name: 'Sreeja Malladi',
        role: 'MS Computer Engineering',
        avatar:
            'assets/Sreeja_Photo.jpg'
    },
    {
        name: 'Michael Castillo.',
        role: 'BS Computer Science and Engineering',
        avatar:
            'assets/michael-castillo.png'
    },
    {
        name: 'Divya Syal',
        role: 'BS Computer Science and Engineering',
        avatar:
            'assets/divya.jpg'
    },
    {
        name: 'Husain Unwalla',
        role: 'MS Computer Engineering',
        avatar:
            'assets/Husain.jpeg'
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
    return `
        <div class="person-card">
            <div class="person-info">
                ${person.content ? `<p class="person-bio">${person.content}</p>` : ''}
                <div class="person-details">
                    <strong>${person.name}</strong> - ${person.role}
                </div>
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
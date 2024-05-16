import profile_photo from '../assets/profile_photo.jpeg';
import { TypeAnimation } from 'react-type-animation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import toast, { Toaster } from 'react-hot-toast';


function HomePage() {

  var currentHour = new Date().getHours();

  let greetingSequence = ["Hello!", 1500, "您好!", 1500];

  if (currentHour < 12) {
    greetingSequence.push("Good morning!");
  } else if (currentHour < 18) {
    greetingSequence.push("Good afternoon!");
  } else {
    greetingSequence.push("Good evening!");
  }
  greetingSequence.push(1500);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("kennyyuyang.chen@mail.utoronto.ca");
    toast.success('Email copied to clipboard!', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  }

  const handleResumeClick = () => {
    const pdfUrl = "resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Resume successfully downloaded!', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  }

  const headerStyles = {
    color: '#415B41',
    fontSize: 64,
    marginLeft: 8,
    paddingTop: 128,
  }

  const bodyStyles = {
    color: '#415B41',
    marginLeft: 10,
    fontSize: 24,
  }

  const profilePhotoStyles = {
    borderRadius: 70,
    height: 140,
    width: 140,
  }
  
  const profilePhotoAndLogosDiv = {
    marginTop: 120,
    paddingRight: 36,
    alignItems: 'center',
  }

  const flexBoxDisplay = {
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 'auto',
  }
  
  const textBoxDisplay = {
    paddingTop: 128,
    flex: 1,
    marginRight: 18,
  }

  const iconsDisplay = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -12,
    gap: 0.3,
  }

  const iconStyle = {
    color: '#415B41',
  }

  return (
    <div style={flexBoxDisplay}>
      <div><Toaster/></div>
      <div style={textBoxDisplay}>
        <header>
          <TypeAnimation 
          sequence={greetingSequence}
          speed={30}
          repeat={Infinity}
          style={headerStyles}/>
        </header>
        <body style={bodyStyles}>
          My name is Kenny.
          <br/>
          I am a 4th year student at the University of Toronto studying Computer Science.
        </body>
      </div>
      <div style={profilePhotoAndLogosDiv}>
        <img src={profile_photo} style={profilePhotoStyles}/>
        <div style={iconsDisplay}>
          <IconButton href="https://github.com/ychen5601" target="_blank">
            <GitHubIcon style={iconStyle}/>
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/kenny-chen-229115231/" target="_blank">
            <LinkedInIcon style={iconStyle}/>
          </IconButton>
          <IconButton onClick={handleEmailClick}>
            <EmailIcon style={iconStyle}/>
          </IconButton>
          <IconButton onClick={handleResumeClick}>
            <DescriptionIcon style={iconStyle}/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

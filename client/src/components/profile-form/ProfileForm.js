import React, {useState, Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile } from '../../actions/profile';

const ProfileForm = props => {
  const {
    profile: { profile, loading },
    createProfile,
    getCurrentProfile
  } = props;

  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');
  const [skills, setSkills] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [bio, setBio] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [youtube, setYoutube] = useState('');
  const [instagram, setInstagram] = useState('');

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  
  const creatingProfile = useMatch('/create-profile');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = {
      company: company,
      website: website,
      location: location,
      status: status,
      skills: skills,
      githubusername: githubUsername,
      bio: bio,
      twitter: twitter,
      facebook: facebook,
      linkedin: linkedIn,
      youtube: youtube,
      instagram: instagram
    };
    

    createProfile(formData, navigate, profile ? true : false);
  };

  return (
    <section className="container">
            <h1 className="large text-primary">
        {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        {creatingProfile
          ? ` Let's get some information to make your`
          : ' Add some changes to your profile'}
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e)=>setCompany(e.target.value)}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e)=>setWebsite(e.target.value)}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={(e)=>setSkills(e.target.value)}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubUsername}
            onChange={(e)=>setGithubUsername(e.target.value)}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={(e)=>setBio(e.target.value)}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e)=>setTwitter(e.target.value)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e)=>setFacebook(e.target.value)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e)=>setYoutube(e.target.value)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedIn}
                onChange={(e)=>setLinkedIn(e.target.value)}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e)=>setInstagram(e.target.value)}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  )
}

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
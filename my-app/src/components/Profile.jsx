import s from './Profile.module.css'

const Profile = () => {
    return (
      <div className={s.profile}> 
      <img src="https://klike.net/uploads/posts/2019-06/1561528183_2.jpg" alt="img" />
      <div className ={s.item}> Text</div>
      <div className ={s.item}> Text</div>
      <div className ={s.item}> Text</div>
      <div className ={s.item}> Text</div>
      <div className ={s.item}> Text</div>

    </div>
    )
}

export default Profile;
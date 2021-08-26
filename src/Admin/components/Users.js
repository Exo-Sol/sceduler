import styles from "../styles/Admin.module.scss";

const UserList = ({ users }) => {
  return (
    <div className={styles.userList}>
      <h3 id={styles.workerTitle}>Workers</h3>
      {users.map((user) => (
        <ul key={user.id}>
          <User user={user} />
        </ul>
      ))}
    </div>
  );
};

export default UserList;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const User = ({ user }) => {
  return (
    <>
      <button
        className={styles.btn}
        style={{
          borderRadius: "50%",
        }}
      >
        <img
          className={styles.avatarImg}
          src={user.avatar_url}
          alt={user.login}
          style={{ width: "45px", borderRadius: "50%", cursor: "pointer" }}
        ></img>
      </button>
      <li
        style={{
          listStyleType: "none",
          paddingBottom: "15px",
        }}
      >
        {user.login}
      </li>
    </>
  );
};

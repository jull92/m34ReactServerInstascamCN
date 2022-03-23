import{deleteUser, updateUser} from "../../utils/index"
import '../../App.css'
import { Link } from "react-router-dom";

export const Settings = () => {
    return (
        <div class="settingsPage">
            <Link to="/home">Go back to home</Link>
            <div onSubmit={updateUser}>
                <p>Update password</p>
                <input /><button>Submit</button>
                <p>Update email</p>
                <input /><button>Submit</button>
            </div>
            <button onClick={deleteUser}>Delete user</button>
        </div>
    );
};
import classnames from "classnames";

export default function Nav({ dir }) {

    const dirs = {
        horizontal: "justify-center lg:space-x-10 md:space-x-5",
        vertical: "flex-col space-y-5"
    }

    const pickedDir = dirs[dir];

    return (
        <ul className={classnames("flex", pickedDir)}>
            <li><a href="#profile" className="font-semibold font-source text-base text-secondary md:text-white text-opacity-80 tracking-widest hover:text-opacity-100">Profile</a>
            </li>
            <li><a href="#skills" className="font-semibold font-source text-base text-secondary md:text-white text-opacity-80 tracking-widest hover:text-opacity-100">Skills</a>
            </li>
            <li><a href="#projects" className="font-semibold font-source text-base text-secondary md:text-white text-opacity-80 tracking-widest hover:text-opacity-100">Projects</a>
            </li>
            <li><a href="#contact" className="font-semibold font-source text-base text-secondary md:text-white text-opacity-80 tracking-widest hover:text-opacity-100">Contact</a>
            </li>
        </ul>
    );
}
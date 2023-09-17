

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-10 px-6 hover:bg-gray-100">
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;
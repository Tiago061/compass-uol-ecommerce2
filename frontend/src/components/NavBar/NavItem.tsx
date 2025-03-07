export interface NavItemInterface{
    url: string,
    label: string
}



function NavItem(props: NavItemInterface){
    return(
        <li className="hover:text-black transition-colors">
            <a href={props.url}>{props.label}</a>
        </li>
    );
}



export default NavItem;
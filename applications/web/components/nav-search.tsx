import { Typeahead } from 'react-bootstrap-typeahead'
import { useRouter } from 'next/router'

const NavSearch = ({ list }) => {
    const style = { width: '300px' }
    const router = useRouter();
    return (
        <Typeahead
            style={style}
            id="typeahead" 
            onChange={(selected) => {
                if (selected.length) {
                    const url = `/books/${selected[0].slug}`;
                    router.push(url);
                }
            }} 
            options={list} 
            placeholder="Book title..."
            labelKey="title" />
    );
}

export default NavSearch
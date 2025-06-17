    import './Search.css'

    export default function SearchBar() {
        return(
            <div className="navbar navbar-dar">
                <h2 className="navbar-brand">Animated Search </h2>
                <form className="w-75 text-end">
                    <input type="text" className="border" placeholder="Search..."/>
                </form>
            </div>

        )
    }
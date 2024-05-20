
"use client";


 function Breadcrumb(props) {
     console.log(props.children)
    return (
        <nav className="bg-grey-light w-full rounded-md">
            <ol className="list-reset flex">

                {props.children?.map(C => (
                    <>
                        {C}
                    <li>
                    <span className="mx-2 text-neutral-400">{"<"}</span>
                    </li>
                    </>
                )) }
            </ol>
        </nav>
    );
}

 Breadcrumb.Item = function () {
     return (
    <li>
        <p
            className="text-primary transition duration-150 ease-in-out hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
        >Home</p
        >
    </li>
     )
}

export default Breadcrumb

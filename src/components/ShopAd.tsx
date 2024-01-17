import { motion } from "framer-motion";
const ShopAd = (props: { information: { AdSubHead: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; AdMainHead: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; AdImage: string | undefined; }; }) => {
    return (
        <div className="py-5">
            <div className="py-5 d-flex">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="py-1 shop-header text-start text-primary">
                            <div className="fs-4 fw-light work-sans shop-question">
                                <p>{props.information.AdSubHead}</p>
                            </div>
                            <div className="py-1 shop-header">
                                <h1 className="header fs-1 fw-semibold">
                                    {props.information.AdMainHead}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <motion.div initial={{}} animate={{rotate: -12, scale:0.7}} transition={{duration: 2}} className="image-handler">
                            <img src={props.information.AdImage}  alt="" className="img-fluid"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopAd;

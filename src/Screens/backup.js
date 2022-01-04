                {loading ? <div className="loader_container"><Loader className="loader" type="spinner-circle" bgColor={"#171717"} title={"Loading Gifts"} color={'#171717'} size={100} /></div>
                    : error ? <h2>{error}</h2>
                        : products.map((p) => (
                            <Product
                                key={p._id}
                                name={p.name}
                                description={p.description}
                                price={p.price}
                                imageUrl={p.imageUrl}
                                productId={p._id}
                            />
                        ))}
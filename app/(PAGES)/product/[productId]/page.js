'use client'

import { useState, useEffect } from "react";

import styles from '@/app/STYLES/product.module.css'
import Produtos from "@/app/utils/Produtos";
import setaIcon from '@/public/icons/seta.png'
import setadouradaIcon from '@/public/icons/setadourada.png'

import Image from "next/image";
import Link from "next/link";

const Camiseta = ({ params }) => {
    const productId = params.productId
    const [product, setProduct] = useState(null)
    const [produtos, setProdutos] = useState(Produtos)

    useEffect(()=>{
        getProductById()
    }, [productId])    

    function getProductById() {
        const foundProduct = Produtos.find(produto => produto.id == productId);
        handleProductResponse(foundProduct);
    }
    
    function handleProductResponse(foundProduct){
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            console.log("Produto não encontrado.");
        }
    }

    /* MUDAR COR DA CAMISETA */

    const coresCamisetas = [
        { id: 1, nome: "Branco", hex: "#ffffff" },
        { id: 2, nome: "Preto", hex: "#000000" },
        { id: 3, nome: "Azul", hex: "#100c3c" },
        { id: 4, nome: "Verde", hex: "#284434" },
        { id: 5, nome: "LaranjaEscuro", hex: "#ff5c04" },
        { id: 6, nome: "LaranjaClaro", hex: "#ffa41c" },
        { id: 7, nome: "Amarelo", hex: "#fffc04" },
        { id: 8, nome: "Vermelho", hex: "#a00404" },
    ];

    // Cria variáveis dinamicamente para cada cor
    function changeColor(cor) {
        const nomeCor = coresCamisetas.find(corCamiseta => corCamiseta.hex === cor).nome;
        const novoCaminhoImg = `/shirts/${product.nome.toLowerCase().replace(/\s+/g, '-')}/${nomeCor.toLowerCase()}.png`;
        setProduct({...product, img: novoCaminhoImg});
    }
    
    return (
        <div>
            {product && (
                <main className={styles.main}>
    
                    <div className={styles.returnArrow}>
                        <a href="/"><Image src={setaIcon} className={styles.setaIcon} alt="return arrow"></Image></a>
                    </div>
    
                    <div className={styles.productBox}>
                        <div className={styles.leftSide}>
                        <div className={styles.productDetails}>
                            <span className={styles.h2} title={product.displayName}>{product.displayName.length > 10 ? product.displayName.substring(0, 10) + '...' : product.displayName} - {product.preco}</span>
                            </div>
                            <div className={styles.productImage}>
                            <Link href={product.img} target="_blank">
                                <Image
                                    src={product.img}
                                    alt={product.nome}                            
                                    className={styles.shirtImage}
                                    width={336}
                                    height={460}
                                />
                            </Link>
                            </div>
                            

                        </div>

                        <div className={styles.borderRight}></div>

                        <div className={styles.rightSide}>
                            <div className={styles.colorsTitle}>
                                <span>Cores: ({product.cores.length})</span>
                            </div>
                            <div className={styles.colorsContainer}>
                                <div className={styles.colorsCircles}>
                                    {product.cores.map((cor, index) => (
                                        <div
                                            key={index}
                                            className={[styles.circle, styles.colorCircle].join(" ")}
                                            style={{ backgroundColor: cor }}
                                            onClick={() => changeColor(cor)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles.borderRight}></div>


                    </div>
                        <div className={styles.purchaseContainer}>
                            <h2 className={styles.prevendaTitle}>PRÉ-VENDA!</h2>
                            <h3 className={styles.prevendaDetails}>
                                Gostou dessa estampa? 
                                Para comprar ela ou qualquer outro produto do site na pré-venda clique no botão abaixo! (Duração até Maio de 2024)
                                </h3>
                            <Link href={'https://docs.google.com/forms/d/1NaE5Rs8la7vr3FaoA_y4xlB0WGCPRwCVznPCmTmleGM'} target="_blank"><button className={styles.button}>Quero!</button></Link>
                        </div>
                </main>
            )}
        </div>
    );
};

export default Camiseta;

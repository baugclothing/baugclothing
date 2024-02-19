'use client'

import styles from '@/app/COMPONENTS/COMP. STYLES/showcase.module.css'
import Image from 'next/image'

import { useRef, useState } from 'react' 

import Link from 'next/link'

import Produtos from '../utils/Produtos'
import SearchBar from './SearchBar'

const Showcase = () => {
    /* HOOKS */
    const [corSelecionada, setCorSelecionada] = useState(null);
    const colorCirclesRef = useRef(null);
    const productImgRef = useRef(null)

    /* ARRAYS */
    const [produtos, setProdutos] = useState(Produtos);

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
    const cores = {};
    coresCamisetas.forEach(cor => {
        cores[cor.nome] = cor;
    });

    /* FUNÇÕES */

    function changeColor (cor, produtoId) {
        const nomeCor = coresCamisetas.find(corCamiseta => corCamiseta.hex === cor).nome;
        const novoCaminhoImg = `/shirts/${produtos.find(p => p.id === produtoId).nome.toLowerCase().replace(/\s+/g, '-')}/${nomeCor.toLowerCase()}.png`;
        
        const novosProdutos = produtos.map(p => {
            if (p.id === produtoId) {
                return { ...p, img: novoCaminhoImg };
            }
            return p;
        });

        setProdutos(novosProdutos);
    }

    return (
        <div className={styles.showcaseBox}>
            {produtos.map((produto) => (
                <div className={styles.productBox} key={produto.id}>
                    <div className={styles.leftSide}>
                        <div className={styles.productImage}>
                            <Link href={`/product/${produto.id}`}>
                                <Image
                                    src={produto.img}
                                    alt={produto.nome}                            
                                    className={styles.shirtImage}
                                    width={336}
                                    height={460}
                                />
                            </Link>
                        </div>
                        <div className={styles.productDetails}>
                        <span className={styles.h2} title={produto.displayName}>{produto.displayName.length > 18 ? produto.displayName.substring(0, 18) + '...' : produto.displayName}</span>
                            <span className={styles.h3}>{produto.preco}</span>
                        </div>
                    </div>

                    <div className={styles.rightSide}>
                        <div className={styles.colorsTitle}>
                            <span>Cores: ({produto.cores.length})</span>
                        </div>
                        <div className={styles.colorsContainer}>
                            <div className={styles.colorsCircles}>
                                {produto.cores.map((cor, index) => (
                                    <div 
                                        key={index} 
                                        ref={colorCirclesRef} 
                                        className={[styles.circle, styles.colorCircle].join(" ")} 
                                        style={{ backgroundColor: cor }}
                                        onClick={() => changeColor(cor,produto.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Showcase;

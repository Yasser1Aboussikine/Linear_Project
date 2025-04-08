import React from "react";
import { Network } from "lucide-react";
import { motion } from "framer-motion";

const BackgroundEffects = () => {
  const mathElements = [
    // Eigenvalue equation
    { text: "Av = λv", position: "top-5 left-20" },
    // Matrix multiplication
    { text: "(AB)ᵀ = BᵀAᵀ", position: "top-20 right-32" },
    // Determinant
    { text: "det(A) = |A|", position: "bottom-32 left-1/4" },
    // Trace
    { text: "tr(A) = Σaᵢᵢ", position: "top-40 left-1/3" },
    // Rank-nullity theorem
    { text: "rank(A) + null(A) = n", position: "bottom-40 right-1/4" },
    // Singular value decomposition
    { text: "A = UΣVᵀ", position: "top-16 right-1/3" },
    // Matrix inverse
    { text: "AAⁱ = AⁱA = I", position: "bottom-24 left-1/3" },
    // Characteristic polynomial
    { text: "det(A - λI) = 0", position: "top-32 left-2/3" },
    // Vector space dimension
    {
      text: "dim(V) = dim(ker(T)) + dim(im(T))",
      position: "bottom-16 right-1/3",
    },
  ];

  const floatingNumbers = ["∞", "π", "e", "i", "∑", "∏", "∂", "∇", "∮", "∫"];

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Enhanced Matrix Display */}
      <motion.div
        className="absolute top-1/3 left-2/5 font-mono text-sm text-emerald-50/40"
        animate={{ opacity: [0.4, 0.3, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="flex items-start gap-3">
          <div>
            [1 2 3]
            <br />
            [4 5 6]
            <br />
            [7 8 9]
          </div>
          <div>×</div>
          <div>
            [a b]
            <br />
            [c d]
            <br />
            [e f]
          </div>
        </div>
      </motion.div>

      {/* Linear Algebra Equations */}
      {mathElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} text-emerald-50/30 text-sm font-mono`}
          animate={{
            opacity: [0.3, 0.4, 0.3],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        >
          {element.text}
        </motion.div>
      ))}

      {/* Floating Numbers and Symbols */}
      {floatingNumbers.map((number, index) => (
        <motion.div
          key={index}
          className="absolute text-emerald-50/40 text-lg font-mono"
          style={{
            left: `${index * 10 + 5}%`,
            top: `${Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -50],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "linear",
          }}
        >
          {number}
        </motion.div>
      ))}

      {/* Additional Matrix Operations */}
      <motion.div
        className="absolute bottom-20 right-20 font-mono text-sm text-emerald-50/30"
        animate={{ opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div>
          det|A| =
          <br />
          |a₁₁ a₁₂|
          <br />
          |a₂₁ a₂₂|
        </div>
      </motion.div>

      {/* Eigenvalue Decomposition */}
      <motion.div
        className="absolute top-40 left-1/4 font-mono text-sm text-emerald-50/30"
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        P⁻¹AP = D
      </motion.div>

      {/* Additional Equations */}
      <motion.div
        className="absolute text-emerald-50/30 text-sm"
        style={{ left: "50%", top: "60%" }}
        animate={{
          opacity: [0.3, 0.4, 0.3],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        ∮ E·dl = -dΦ/dt
      </motion.div>

      {/* Diagonal Matrix */}
      <motion.div
        className="absolute top-1/4 right-20 font-mono text-sm text-emerald-50/30"
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div>
          [λ₁ 0 0]
          <br />
          [0 λ₂ 0]
          <br />
          [0 0 λ₃]
        </div>
      </motion.div>
    </div>
  );
};

export default BackgroundEffects;

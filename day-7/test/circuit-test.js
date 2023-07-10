const assert = require("assert");
const { describe, it } = require("node:test");
const { Circuit, createCircuit } = require("../src/circuit");
const { Gates } = require("../src/gates");
const { Wire } = require("../src/wire");

describe("Circuit", () => {
  describe("add", () => {
    describe("should not connect the component", () => {
      it("when no input source is provided", () => {
        const circuit = new Circuit(new Gates());
        const component = {
          operation: "AND",
          inputs: [],
          output: new Wire("xy"),
        };

        assert.strictEqual(circuit.add(component), false);
      });

      it("when all input sources doesn't have a signal", () => {
        const circuit = new Circuit(new Gates());
        const component1 = {
          operation: "AND",
          inputs: [1, new Wire("ab")],
          output: new Wire("xy"),
        };

        const component2 = {
          operation: "OR",
          inputs: [new Wire("a"), new Wire("b")],
          output: new Wire("ab"),
        };

        assert.strictEqual(circuit.add(component1), false);
        assert.strictEqual(circuit.add(component2), false);
      });
    });

    describe("when all input sources have a signal it should connect the component", () => {
      it("through 'AND gate' if the operation is 'AND'", () => {
        const circuit = new Circuit(new Gates());
        const xy = new Wire("xy");
        const ab = new Wire("ab");
        const component = {
          operation: "AND",
          inputs: [1, 3],
          output: xy,
        };

        const component2 = {
          operation: "AND",
          inputs: [new Wire("x", 5), new Wire("y", 7)],
          output: ab,
        };

        assert.strictEqual(circuit.add(component), true);
        assert.strictEqual(xy.signal, 1);
        assert.strictEqual(circuit.add(component2), true);
        assert.strictEqual(ab.signal, 5);
      });

      it("through 'OR gate' if the operation is 'OR'", () => {
        const circuit = new Circuit(new Gates());
        const xy = new Wire("xy");
        const ab = new Wire("ab");
        const component = {
          operation: "OR",
          inputs: [1, 3],
          output: xy,
        };

        const component2 = {
          operation: "OR",
          inputs: [new Wire("x", 5), new Wire("y", 7)],
          output: ab,
        };

        assert.strictEqual(circuit.add(component), true);
        assert.strictEqual(xy.signal, 3);
        assert.strictEqual(circuit.add(component2), true);
        assert.strictEqual(ab.signal, 7);
      });

      it("through 'NOT gate' if the operation is 'NOT'", () => {
        const circuit = new Circuit(new Gates());
        const xy = new Wire("xy");
        const ab = new Wire("ab");
        const component = {
          operation: "NOT",
          inputs: [1],
          output: xy,
        };

        const component2 = {
          operation: "NOT",
          inputs: [new Wire("x", 5)],
          output: ab,
        };

        assert.strictEqual(circuit.add(component), true);
        assert.strictEqual(xy.signal, 65534);
        assert.strictEqual(circuit.add(component2), true);
        assert.strictEqual(ab.signal, 65530);
      });

      it("through '<< gate' if the operation is 'LSHIFT'", () => {
        const circuit = new Circuit(new Gates());
        const xy = new Wire("xy");
        const ab = new Wire("ab");
        const component = {
          operation: "LSHIFT",
          inputs: [5, 2],
          output: xy,
        };

        const component2 = {
          operation: "LSHIFT",
          inputs: [new Wire("x", 5), 1],
          output: ab,
        };

        assert.strictEqual(circuit.add(component), true);
        assert.strictEqual(xy.signal, 20);
        assert.strictEqual(circuit.add(component2), true);
        assert.strictEqual(ab.signal, 10);
      });

      it("through '>> gate' if the operation is 'RSHIFT'", () => {
        const circuit = new Circuit(new Gates());
        const xy = new Wire("xy");
        const ab = new Wire("ab");
        const component = {
          operation: "RSHIFT",
          inputs: [5, 2],
          output: xy,
        };

        const component2 = {
          operation: "RSHIFT",
          inputs: [new Wire("x", 5), 1],
          output: ab,
        };

        assert.strictEqual(circuit.add(component), true);
        assert.strictEqual(xy.signal, 1);
        assert.strictEqual(circuit.add(component2), true);
        assert.strictEqual(ab.signal, 2);
      });

      it("assign a signal to the wire if the operation is 'ASSIGN'", () => {
        const circuit = new Circuit(new Gates());
        const xy = new Wire("xy");
        const ab = new Wire("ab");
        const component = {
          operation: "ASSIGN",
          inputs: [5],
          output: xy,
        };

        const component2 = {
          operation: "AND",
          inputs: [5, new Wire("xy")],
          output: ab,
        };

        assert.strictEqual(circuit.add(component), true);
        assert.strictEqual(xy.signal, 5);
        assert.strictEqual(circuit.add(component2), true);
        assert.strictEqual(ab.signal, 5);
      });
    });
  });

  describe("createCircuit", () => {
    it("should add components to the circuit", () => {
      const circuit = new Circuit(new Gates());
      const components = [
        {
          operation: "AND",
          inputs: [new Wire('x'), new Wire('y')],
          output: new Wire("xy"),
        },
        {
          operation: "OR",
          inputs: [new Wire('x'), new Wire('y')],
          output: new Wire("ab"),
        },
        {
          operation: "ASSIGN",
          inputs: [4],
          output: new Wire("x"),
        },
        {
          operation: "ASSIGN",
          inputs: [6],
          output: new Wire("y"),
        },
      ];

      createCircuit(components, circuit);
      assert.deepStrictEqual(circuit.getWires(), { x: 4, y: 6, xy: 4, ab: 6 });
    });
  });
});
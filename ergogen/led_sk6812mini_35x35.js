module.exports = {
  params: {
    designator: 'L',
    side: 'F',
    show_3d: false,
    from: {type: 'net', value: undefined},
    to: {type: 'net', value: undefined},
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_LED:LED_SK6812MINI_PLCC4_3.5x3.5mm_P1.75mm_rev_all"
        (version 20221018)
        (generator pcbnew)
        (layer "F.Cu")
        (descr "https://cdn-shop.adafruit.com/product-files/2686/SK6812MINI_REV.01-1-2.pdf")
        (tags "LED RGB NeoPixel Mini")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_poly (pts (xy 2.6924 1.35) (xy 2.6924 1.95) (xy 2.0924 1.95)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.SilkS") )
    `
    const front_pads = `
        (pad "1" smd rect (at -1.4 -0.65 ${p.rot}) (size 1.5 1.3) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.to})
        (pad "2" smd rect (at -0.95 0.9 ${p.rot}) (size 2.4 0.8) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.GND})
        (pad "3" smd rect (at 1.5 0.85 ${p.rot}) (size 1.3 0.9) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.from})
        (pad "4" smd rect (at 1.05 -0.7 ${p.rot}) (size 2.2 1.2) (layers "F.Cu" "F.Paste" "F.Mask")  ${p.VCC})
    `
    const front_fabrication = `
        (fp_text reference "${p.ref}" (at 0 -2.75 ${p.rot}) (layer "F.Fab") hide (effects (font (size 1 1) (thickness 0.15))) )
        (fp_text value "LED_SK6812MINI_PLCC4_3.5x3.5mm_P1.75mm_rev_all" (at 0 3.25 ${p.rot}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))) )
        (fp_line (start -1.75 -1.75) (end -1.75 1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start -1.75 1.75) (end 1.75 1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 1.75 -1.75) (end -1.75 -1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 1.75 0.75) (end 0.75 1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_line (start 1.75 1.75) (end 1.75 -1.75) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
        (fp_circle (center 0 0) (end 0 -1.5) (stroke (width 0.1) (type solid)) (fill none) (layer "F.Fab") )
    `
    const front_mask = `
    `
    const front_courtyard = `
        (fp_line (start -2.8 -2) (end -2.8 2) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -2.8 2) (end 2.8 2) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 2.8 -2) (end -2.8 -2) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 2.8 2) (end 2.8 -2) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "1" thru_hole circle (at 0 -1.725 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask")  ${p.to})
        (pad "2" thru_hole circle (at 0 0.9 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask")  ${p.GND})
        (pad "3" thru_hole circle (at 0 1.725 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask")  ${p.from})
        (pad "4" thru_hole circle (at 0 -0.7 ${p.rot}) (size 0.4 0.4) (drill 0.3) (layers "*.Cu" "*.Mask")  ${p.VCC})
    `
    const back_silkscreen = `
        (fp_poly (pts (xy -2.6924 1.35) (xy -2.6924 1.95) (xy -2.0924 1.95)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.SilkS") )
    `
    const back_pads = `
        (pad "1" smd rect (at 1.4 -0.65 ${p.rot}) (size 1.5 1.3) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.to})
        (pad "2" smd rect (at 0.95 0.9 ${p.rot}) (size 2.4 0.8) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.GND})
        (pad "3" smd rect (at -1.5 0.85 ${p.rot}) (size 1.3 0.9) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.from})
        (pad "4" smd rect (at -1.05 -0.7 ${p.rot}) (size 2.2 1.2) (layers "B.Cu" "B.Paste" "B.Mask")  ${p.VCC})
    `
    const back_fabrication = `
    `
    const back_mask = `
    `
    const back_courtyard = `
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
    `
    const user_comments = `
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `

    let offset = "(xyz 0 0 0)"
    let rotate = "(xyz 0 0 0)"
    if (p.side == "B") {
        offset = "(xyz 0 0 -1.6)"
        rotate = "(xyz 0 180 0)"
    }

    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/SK6812MINI.wrl" (offset ${offset}) (scale (xyz 1 1 1)) (rotate ${rotate}))
    `
    const standard_closing = `
            )
    `
    let final = standard_opening;
    final += front_silkscreen;
    final += front_pads;
    final += front_fabrication;
    final += front_mask;
    final += front_courtyard;
    final += front_paste;
    final += pads;
    final += back_silkscreen;
    final += back_pads;
    final += back_fabrication;
    final += back_mask;
    final += back_courtyard;
    final += back_paste;
    final += edge_cuts;
    final += user_drawing;
    final += user_comments;
    final += user_eco1;
    final += user_eco2;
    final += model;
    final += standard_closing;

    return final
  }
}

module.exports = {
  params: {
    designator: 'S',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    P2: {type: 'net', value: 'P2'}, // undefined, // change to undefined as needed
    P1: {type: 'net', value: 'P1'}, // undefined, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "SW_MX_HS_1u_reversible"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Footprint for Cherry MX style switches with Kailh hotswap socket")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_pads = `
        (pad "1" smd roundrect (at 6.535 -2.54 ${p.rot}) (size 4.2 2.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (uuid "f200f7ff-c180-4b88-af2f-15382c7ef9f8") ${p.P1})
        (pad "2" smd roundrect (at -5.265 -5.08 ${p.rot}) (size 4.2 2.5) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1) (uuid "1db8ccdb-d377-428b-b096-5e1ee7615369") ${p.P2})
    `
    const pads = `
        (pad "" np_thru_hole circle (at -5.08 0 ${p.rot}) (size 1.75 1.75) (drill 1.75) (layers "*.Mask") (uuid "ec8122ca-7f62-429e-878f-11558e016561"))
        (pad "" np_thru_hole circle (at 0 0 ${p.rot}) (size 3.9878 3.9878) (drill 3.9878) (layers "*.Cu" "*.Mask") (uuid "e51bca19-f6a2-465e-ad69-da03145fe870"))
        (pad "" np_thru_hole circle (at 5.08 0 ${p.rot}) (size 1.75 1.75) (drill 1.75) (layers "*.Mask") (uuid "cc9b3f43-dda1-4ddd-b125-29d2dfb90375"))
        (pad "1" thru_hole circle (at 2.590176 -5.06978 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "f789ec5e-6ec5-4eb6-8ed7-3f29aa8c71b3") ${p.P1})
        (pad "1" thru_hole circle (at 3.81 -2.54 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "f931232a-e0ed-4928-bd42-952175a01e45") ${p.P1})
        (pad "2" thru_hole circle (at -3.759824 -2.52978 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "a25d5e04-cf8b-4d96-84eb-d6c6993c0eeb") ${p.P2})
        (pad "2" thru_hole circle (at -2.54 -5.08 ${p.rot}) (size 3.3 3.3) (drill 3) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "03e21442-98c6-468f-a9bf-67569c56c4d9") ${p.P2})
    `
    const back_pads = `
        (pad "1" smd roundrect (at 5.315176 -5.06978 ${p.rot}) (size 4.2 2.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1) (uuid "1cffe02a-95b3-462c-924b-fe525044de00") ${p.P1})
        (pad "2" smd roundrect (at -6.484824 -2.52978 ${p.rot}) (size 4.2 2.5) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1) (uuid "e9dc95fc-cae4-4923-a789-5bba6ca5811e") ${p.P2})
    `
    const front_silkscreen = `
        (fp_line (start -4.864824 -6.75022) (end -4.864824 -6.52022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "06b3cf51-3d6d-4e92-bf48-a8900dba2381"))
        (fp_line (start -4.864824 -3.67022) (end -4.864824 -3.20022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "ec9ad0ca-c047-4fdf-90a6-0d80c2e2fb95"))
        (fp_line (start -4.364824 -2.70022) (end 0.2 -2.70022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "2af83ba9-4b18-45bc-9b08-ce554f240712"))
        (fp_line (start -3.314824 -6.75022) (end -4.864824 -6.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "c2458583-afb1-4591-b93c-fe9be0f47ba9"))
        (fp_line (start 4.085176 -6.75022) (end -1.814824 -6.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "a47166b0-24e0-4794-8f26-4c0df7c8d0bf"))
        (fp_line (start 6.085176 -3.95022) (end 6.085176 -4.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "95895102-0e0b-4fd9-ba12-0b1659971568"))
        (fp_line (start 6.085176 -1.10022) (end 6.085176 -0.86022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "bf8cf6c4-452b-4c97-b31d-fd49846043fd"))
        (fp_arc (start -4.364824 -2.70022) (mid -4.718377 -2.846667) (end -4.864824 -3.20022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "93a991ab-7a70-4a31-9181-f91dce3e9c71"))
        (fp_arc (start 0.2 -2.70022) (mid 1.670693 -2.183637) (end 2.494322 -0.86022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "c2d05716-4175-4181-8539-0877ea239b59"))
        (fp_arc (start 4.085176 -6.75022) (mid 5.49939 -6.164434) (end 6.085176 -4.75022) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "be36be03-7526-4bc8-aa7d-8c8a89e8aef8"))
    `
    const back_silkscreen = `
        (fp_line (start -6.035 -3.94) (end -6.035 -4.74) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "12d0e19b-0623-4451-86c9-89818f5b7b2f"))
        (fp_line (start -6.035 -1.09) (end -6.035 -0.85) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "09b428f1-3bbd-4a65-9523-aff91d19df9b"))
        (fp_line (start -4.035 -6.74) (end 1.865 -6.74) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "411f3d6f-5067-497b-a887-94dab357a5ef"))
        (fp_line (start 3.365 -6.74) (end 4.915 -6.74) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "6df06d9a-54ff-4198-80de-abccc7a6d4ce"))
        (fp_line (start 4.415 -2.69) (end -0.149824 -2.69) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "5ccc4600-4d15-46de-bb10-622c5e2ec5ba"))
        (fp_line (start 4.915 -6.74) (end 4.915 -6.51) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "51b7324e-7a60-49ae-8c5d-424c0b8ec02b"))
        (fp_line (start 4.915 -3.66) (end 4.915 -3.19) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "06f81f12-b095-4a10-9685-def2fdbd33ce"))
        (fp_arc (start -6.035 -4.74) (mid -5.449216 -6.154216) (end -4.035 -6.74) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "0cc173bc-0997-44c6-a5d8-0908a8b6cb10"))
        (fp_arc (start -2.444146 -0.85) (mid -1.620517 -2.173417) (end -0.149824 -2.69) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "afc70bb4-d449-4e06-902b-844f26f1a554"))
        (fp_arc (start 4.915 -3.19) (mid 4.768553 -2.836447) (end 4.415 -2.69) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "449b8352-c950-4576-950f-590b9e74e9d3"))
    `
    const front_fabrication = `
        (property "Reference" "${p.ref}" (at -4.2672 1.8288 ${0 + p.rot}) (layer "F.Fab") (uuid "abcea926-33d8-442d-a367-35cda3816ca5") (effects (font (size 1 1) (thickness 0.15))))
        (property "Value" "SW_MX_HS_1u_reversible" (at 0 -8 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "930a4898-6462-4f61-bbad-855140dc5618") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "a854f30d-8ee1-4f62-bea0-32309a9660ba") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "97908711-b100-4f9b-9d99-d4ace9c400f3") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "c2729870-136b-4d3e-935d-23edcda4626e") (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const back_fabrication = `
        (fp_text user "${p.ref}" (at 4.3688 1.778 ${0 + p.rot}) (layer "B.Fab") (uuid "4ff0e365-b6ae-4867-8c9c-5d66e8a9d918") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
    const front_mask = `
    `
    const back_mask = `
    `
    const front_courtyard = `
        (fp_line (start -7.414824 -6.32022) (end -4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "da533c10-61cd-43f6-8693-6fabbad8e5ae"))
        (fp_line (start -7.414824 -3.87022) (end -7.414824 -6.32022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "f5df09cc-e7d8-40ed-81dc-431146d8ff35"))
        (fp_line (start -4.864824 -6.75022) (end -4.864824 -6.32022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a2c97c45-b55f-43df-977b-33548389de8e"))
        (fp_line (start -4.864824 -3.87022) (end -7.414824 -3.87022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a8a2196b-dd7c-4b18-b2ea-66b60e3c87d6"))
        (fp_line (start -4.864824 -3.87022) (end -4.864824 -2.70022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "6cc7ba43-ff35-4c10-923b-491474f9b58f"))
        (fp_line (start -4.864824 -2.70022) (end 0.2 -2.70022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "64af8c2f-3cda-408b-93f0-4586a33f5951"))
        (fp_line (start 4.085176 -6.75022) (end -4.864824 -6.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "a561b113-b672-4bbc-a923-2a958de80ade"))
        (fp_line (start 6.085176 -3.75022) (end 6.085176 -4.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "42fb216d-321d-41d3-9f9d-0a06de02d057"))
        (fp_line (start 6.085176 -3.75022) (end 8.685176 -3.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "b230983b-238e-4612-8dd6-7eaceede720f"))
        (fp_line (start 6.085176 -1.30022) (end 6.085176 -0.86022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "b9b866b8-16d7-473d-887d-b5e7ac557a18"))
        (fp_line (start 6.085176 -0.86022) (end 2.494322 -0.86022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "468278e7-8e91-4ece-818c-afa2c416c8ad"))
        (fp_line (start 7.050176 -6.98978) (end -6.949824 -6.98978) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "74c6c560-7fef-40dd-a78c-615dbcf16767"))
        (fp_line (start 8.685176 -3.75022) (end 8.685176 -1.30022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "68d6ebab-a88d-4b83-b232-047ea40f68e3"))
        (fp_line (start 8.685176 -1.30022) (end 6.085176 -1.30022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "10d890dd-f309-4ce7-bb04-a4ac495436b1"))
        (fp_arc (start 0.2 -2.70022) (mid 1.670503 -2.183399) (end 2.494322 -0.86022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "ae096316-2a43-409e-b6e8-a6d1a49a12f2"))
        (fp_arc (start 4.085176 -6.75022) (mid 5.49939 -6.164434) (end 6.085176 -4.75022) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (uuid "b4449849-5028-4cf6-be71-48e1764448bc"))
    `
    const back_courtyard = `
        (fp_line (start -8.635 -3.74) (end -8.635 -1.29) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "6a78cafd-cc76-4b03-9298-3ed913f17221"))
        (fp_line (start -8.635 -1.29) (end -6.035 -1.29) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "391fc627-d090-4466-b5f9-e57df06a3ef7"))
        (fp_line (start -7 -7) (end 7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "8ff1a877-72e4-470b-8ae9-35d34ed33485"))
        (fp_line (start -7 7) (end -7 -7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "1210dd5e-cb24-448e-8787-be6b70c9e12f"))
        (fp_line (start -6.035 -3.74) (end -8.635 -3.74) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "9986297e-b99c-48ff-83f5-d18725548a9c"))
        (fp_line (start -6.035 -3.74) (end -6.035 -4.74) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "ce02f2d0-0376-4a83-b440-a8e39980a687"))
        (fp_line (start -6.035 -1.29) (end -6.035 -0.85) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "b40850d2-0355-4a7e-bd3d-93299f86247e"))
        (fp_line (start -6.035 -0.85) (end -2.444146 -0.85) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "264cd7f9-d186-46fd-8be7-b35582d7f54f"))
        (fp_line (start -4.035 -6.74) (end 4.915 -6.74) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "0ad2fed2-23eb-4223-a0a0-af94e8eaa3c6"))
        (fp_line (start 4.915 -6.74) (end 4.915 -6.31) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "06a32520-7cf1-49cb-936e-9973f5feb1f5"))
        (fp_line (start 4.915 -3.86) (end 4.915 -2.69) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "2b27100d-effc-4fca-9bf1-6123420fd5cc"))
        (fp_line (start 4.915 -3.86) (end 7.465 -3.86) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "f980a6a7-6534-4891-8ffb-fce3518c2f2b"))
        (fp_line (start 4.915 -2.69) (end -0.149824 -2.69) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "8f17ee45-dc5d-461b-92e1-851fd438b4c4"))
        (fp_line (start 7 -7) (end 7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "df2f3fc1-ca01-44e9-9fde-a52c6de7d243"))
        (fp_line (start 7 7) (end -7 7) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "aea8023e-4745-4ffc-91dc-a313a21f6271"))
        (fp_line (start 7.465 -6.31) (end 4.915 -6.31) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "b00b9d47-0a46-4ad8-9042-7006c01781e8"))
        (fp_line (start 7.465 -3.86) (end 7.465 -6.31) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "0ffc8684-8545-4502-8455-ab03b183baf8"))
        (fp_arc (start -6.035 -4.74) (mid -5.449216 -6.154216) (end -4.035 -6.74) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "d6842c89-ddd5-47f2-9744-3f8377d08847"))
        (fp_arc (start -2.444146 -0.85) (mid -1.620326 -2.173179) (end -0.149824 -2.69) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (uuid "0512bc39-7278-4055-8976-6579dd8e8c22"))
    `
    const front_paste = `
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
        (fp_line (start -9.525 -9.525) (end 9.525 -9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "7b82b5b6-22d3-4190-bd97-8bda880e3150"))
        (fp_line (start -9.525 9.525) (end -9.525 -9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "74306595-ebad-4bd7-8c07-1c6483f071c9"))
        (fp_line (start 9.525 -9.525) (end 9.525 9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "a6abb962-39c6-4b9a-b005-512238bd091c"))
        (fp_line (start 9.525 9.525) (end -9.525 9.525) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (uuid "d6ccb0c8-8cc9-4389-9c84-413746b82e5a"))
    `
    const user_comments = `
        (fp_rect (start -3.8 3.08) (end 3.8 7.08) (stroke (width 0.12) (type default)) (fill none) (layer "Cmts.User") (uuid "adfacccf-739b-43fe-a218-a1576fa6f3af"))
        (fp_text user "LED" (at -1.27 5.6896 ${0 + p.rot}) (unlocked yes) (layer "Cmts.User") (uuid "a1b3bc27-b831-4d12-9d35-6e9d2816f669") (effects (font (size 1 1) (thickness 0.15)) (justify left bottom)))
    `
    const user_eco1 = `
        (fp_rect (start -7 -7) (end 7 7) (stroke (width 0.12) (type default)) (fill none) (layer "Eco1.User") (uuid "84a8767a-2e03-4794-aa53-1d21b30c9e8d"))
    `
    const user_eco2 = `
        (fp_line (start -7 -6.5) (end -7 6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "510ee886-be4f-4140-89a6-ee031606b5dc"))
        (fp_line (start -6.5 7) (end 6.5 7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "a52ac084-eaef-4e90-81e8-82e787aa3040"))
        (fp_line (start -6.449824 -6.98978) (end 6.550176 -6.98978) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "04e3d0fa-a85b-4bdb-b68d-0c4e15af76cd"))
        (fp_line (start 6.5 -7) (end -6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "c7ea730e-13a5-4b48-921a-1e115f3e8956"))
        (fp_line (start 7 6.5) (end 7 -6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "56be4aa7-7a3c-476c-b27e-2ef4f3d2dfd1"))
        (fp_arc (start -7 -6.5) (mid -6.853553 -6.853553) (end -6.5 -7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "3f2860a2-543d-4838-9f1b-588d41b3be29"))
        (fp_arc (start -6.949824 -6.48978) (mid -6.803377 -6.843333) (end -6.449824 -6.98978) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "2d4d34c2-1e1c-4d7c-b681-fb93a227a077"))
        (fp_arc (start -6.497236 6.998884) (mid -6.850789 6.852437) (end -6.997236 6.498884) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "b9341a1b-dc6a-4f93-856e-36020ce9d7b5"))
        (fp_arc (start 6.5 -7) (mid 6.853553 -6.853553) (end 7 -6.5) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "589d9a11-9a12-4352-9662-4435e3a0dacc"))
        (fp_arc (start 6.550176 -6.98978) (mid 6.903729 -6.843333) (end 7.050176 -6.48978) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "e7dfa559-6b59-4709-8e17-0378da9f28fd"))
        (fp_arc (start 7 6.5) (mid 6.853553 6.853553) (end 6.5 7) (stroke (width 0.05) (type solid)) (layer "Eco2.User") (uuid "04b68965-2fdb-4122-8486-fb22ad930f20"))
    `
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Hot Swap/mx.step" (offset (xyz -3.81 2.54 -3.5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Key Switch/Cherry-MX-silent_alpaca.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Keycaps/DSA_1u.step" (offset (xyz 0 0 12)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))
    `
    const standard_closing = `
            )

    `
    let final = standard_opening;
    final += front_pads;
    final += front_silkscreen;
    final += front_fabrication;
    final += front_mask;
    final += front_courtyard;
    final += front_paste;
    final += pads;
    final += back_pads;
    final += back_silkscreen;
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